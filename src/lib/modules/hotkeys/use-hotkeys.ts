// NOTE(jimmylee)
// Vendored from
// https://github.com/JohannesKlauss/react-hotkeys-hook/blob/main/src/useHotkeys.ts

import {
  HotkeyCallback,
  Keys,
  Options,
  OptionsOrDependencyArray,
  RefType,
} from "@/lib/modules/hotkeys/types";
import {
  DependencyList,
  RefCallback,
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import {
  mapKey,
  parseHotkey,
  parseKeysHookInput,
} from "@/lib/modules/hotkeys/parse-hotkeys";
import {
  isHotkeyEnabled,
  isHotkeyEnabledOnTag,
  isHotkeyMatchingKeyboardEvent,
  isKeyboardEventTriggeredByInput,
  isScopeActive,
  maybePreventDefault,
} from "@/lib/modules/hotkeys/validators";
import { useHotkeysContext } from "@/lib/modules/hotkeys/hotkeys-provider";
import { useBoundHotkeysProxy } from "@/lib/modules/hotkeys/bound-hotkeys-proxy-provider";
import useDeepEqualMemo from "@/lib/modules/hotkeys/use-deep-equal-memo";
import {
  isReadonlyArray,
  pushToCurrentlyPressedKeys,
  removeFromCurrentlyPressedKeys,
} from "@/lib/modules/hotkeys/is-hotkey-pressed";

const stopPropagation = (e: KeyboardEvent): void => {
  e.stopPropagation();
  e.preventDefault();
  e.stopImmediatePropagation();
};

const useSafeLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function useHotkeys<T extends HTMLElement>(
  keys: Keys,
  callback: HotkeyCallback,
  options?: OptionsOrDependencyArray,
  dependencies?: OptionsOrDependencyArray,
) {
  const [ref, setRef] = useState<RefType<T>>(null);
  const hasTriggeredRef = useRef(false);

  const _options: Options | undefined = !(options instanceof Array)
    ? (options as Options)
    : !(dependencies instanceof Array)
      ? (dependencies as Options)
      : undefined;
  const _keys: string = isReadonlyArray(keys)
    ? keys.join(_options?.splitKey)
    : keys;
  const _deps: DependencyList | undefined =
    options instanceof Array
      ? options
      : dependencies instanceof Array
        ? dependencies
        : undefined;

  const memoisedCB = useCallback(callback, _deps ?? []);
  const cbRef = useRef<HotkeyCallback>(memoisedCB);

  if (_deps) {
    cbRef.current = memoisedCB;
  } else {
    cbRef.current = callback;
  }

  const memoisedOptions = useDeepEqualMemo(_options);

  const { enabledScopes } = useHotkeysContext();
  const proxy = useBoundHotkeysProxy();

  useSafeLayoutEffect(() => {
    if (
      memoisedOptions?.enabled === false ||
      !isScopeActive(enabledScopes, memoisedOptions?.scopes)
    ) {
      return;
    }

    const listener = (e: KeyboardEvent, isKeyUp = false) => {
      if (
        isKeyboardEventTriggeredByInput(e) &&
        !isHotkeyEnabledOnTag(e, memoisedOptions?.enableOnFormTags)
      ) {
        return;
      }

      // TODO: SINCE THE EVENT IS NOW ATTACHED TO THE REF, THE ACTIVE ELEMENT CAN NEVER BE INSIDE THE REF. THE HOTKEY ONLY TRIGGERS IF THE
      // REF IS THE ACTIVE ELEMENT. THIS IS A PROBLEM SINCE FOCUSED SUB COMPONENTS WON'T TRIGGER THE HOTKEY.
      if (ref !== null) {
        const rootNode = ref.getRootNode();
        if (
          (rootNode instanceof Document || rootNode instanceof ShadowRoot) &&
          rootNode.activeElement !== ref &&
          !ref.contains(rootNode.activeElement)
        ) {
          stopPropagation(e);
          return;
        }
      }

      if (
        (e.target as HTMLElement)?.isContentEditable &&
        !memoisedOptions?.enableOnContentEditable
      ) {
        return;
      }

      parseKeysHookInput(_keys, memoisedOptions?.splitKey).forEach((key) => {
        const hotkey = parseHotkey(key, memoisedOptions?.combinationKey);

        if (
          isHotkeyMatchingKeyboardEvent(
            e,
            hotkey,
            memoisedOptions?.ignoreModifiers,
          ) ||
          hotkey.keys?.includes("*")
        ) {
          if (memoisedOptions?.ignoreEventWhen?.(e)) {
            return;
          }

          if (isKeyUp && hasTriggeredRef.current) {
            return;
          }

          maybePreventDefault(e, hotkey, memoisedOptions?.preventDefault);

          if (!isHotkeyEnabled(e, hotkey, memoisedOptions?.enabled)) {
            stopPropagation(e);

            return;
          }

          // Execute the user callback for that hotkey
          cbRef.current(e, hotkey);

          if (!isKeyUp) {
            hasTriggeredRef.current = true;
          }
        }
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === undefined) {
        // Synthetic event (e.g., Chrome autofill).  Ignore.
        return;
      }

      pushToCurrentlyPressedKeys(mapKey(event.code));

      if (
        (memoisedOptions?.keydown === undefined &&
          memoisedOptions?.keyup !== true) ||
        memoisedOptions?.keydown
      ) {
        listener(event);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === undefined) {
        // Synthetic event (e.g., Chrome autofill).  Ignore.
        return;
      }

      removeFromCurrentlyPressedKeys(mapKey(event.code));

      hasTriggeredRef.current = false;

      if (memoisedOptions?.keyup) {
        listener(event, true);
      }
    };

    const domNode = ref || _options?.document || document;

    // @ts-expect-error description
    domNode.addEventListener("keyup", handleKeyUp);
    // @ts-expect-error description
    domNode.addEventListener("keydown", handleKeyDown);

    if (proxy) {
      parseKeysHookInput(_keys, memoisedOptions?.splitKey).forEach((key) =>
        proxy.addHotkey(
          parseHotkey(
            key,
            memoisedOptions?.combinationKey,
            memoisedOptions?.description,
          ),
        ),
      );
    }

    return () => {
      // @ts-expect-error description
      domNode.removeEventListener("keyup", handleKeyUp);
      // @ts-expect-error description
      domNode.removeEventListener("keydown", handleKeyDown);

      if (proxy) {
        parseKeysHookInput(_keys, memoisedOptions?.splitKey).forEach((key) =>
          proxy.removeHotkey(
            parseHotkey(
              key,
              memoisedOptions?.combinationKey,
              memoisedOptions?.description,
            ),
          ),
        );
      }
    };
  }, [ref, _keys, memoisedOptions, enabledScopes]);

  return setRef as RefCallback<T>;
}
