// NOTE(jimmylee)
// Vendored from
// https://github.com/JohannesKlauss/react-hotkeys-hook/blob/main/src/index.ts

import useHotkeys from "@/lib/modules/hotkeys/use-hotkeys";
import type {
  Options,
  Keys,
  HotkeyCallback,
} from "@/lib/modules/hotkeys/types";
import {
  HotkeysProvider,
  useHotkeysContext,
} from "@/lib/modules/hotkeys/hotkeys-provider";
import { isHotkeyPressed } from "@/lib/modules/hotkeys/is-hotkey-pressed";
import useRecordHotkeys from "@/lib/modules/hotkeys/use-record-hotkeys";

export {
  useHotkeys,
  useRecordHotkeys,
  useHotkeysContext,
  isHotkeyPressed,
  HotkeysProvider,
  Options,
  Keys,
  HotkeyCallback,
};
