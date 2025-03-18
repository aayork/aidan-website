"use client";

import styles from "@/components/srcl/page/srcl-defaultactionbar.module.scss";

import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import { toggleDebugGrid } from "@/components/srcl/srcl-debuggrid";
import { useHotkeys } from "@/lib/modules/hotkeys";

import ActionBar from "@/components/srcl/srcl-actionbar";

const useGlobalNavigationHotkeys = () => {
  const onHandleSubmit = (event: KeyboardEvent) => {
    const target = event.target;
    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();
      (target as HTMLElement).click();
    }
  };

  const onHandleNextFocus = (event: KeyboardEvent) => {
    const target = event.target;

    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();

      const nextFocusable = Utilities.findNextFocusable(
        target as Element,
        "next",
      );
      if (nextFocusable) {
        nextFocusable.focus();
      }
    }
  };

  const onHandlePreviousFocus = (event: KeyboardEvent) => {
    const target = event.target;

    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();

      const previousFocusable = Utilities.findNextFocusable(
        target as Element,
        "previous",
      );
      if (previousFocusable) {
        previousFocusable.focus();
      }
    }
  };

  useHotkeys("ArrowDown", onHandleNextFocus);
  useHotkeys("ArrowUp", onHandlePreviousFocus);
  useHotkeys("ArrowRight", onHandleNextFocus);
  useHotkeys("ArrowLeft", onHandlePreviousFocus);
  useHotkeys("Enter", onHandleSubmit);
  useHotkeys(" ", onHandleSubmit);
};

interface DefaultActionBarProps {
  items?: {
    hotkey: string;
    onClick: () => void;
    body: React.ReactNode;
    items?: any;
  }[];
}

const DefaultActionBar: React.FC<DefaultActionBarProps> = ({ items = [] }) => {
  useHotkeys("ctrl+g", () => toggleDebugGrid());

  useGlobalNavigationHotkeys();

  return (
    <div className={styles.root}>
      <ActionBar
        items={[
          {
            hotkey: "⌃+O",
            body: "Fonts",
            openHotkey: "ctrl+o",
            items: [
              {
                icon: "⊹",
                children: "Commit Mono V143 [OFL]",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-commit-mono"),
              },
              {
                icon: "⊹",
                children: "Departure Mono [MIT]",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-departure-mono"),
              },
              {
                icon: "⊹",
                children: "Fira Code [OFL]",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-fira-code"),
              },
              {
                icon: "⊹",
                children: "Fragment Mono [OFL]",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-fragment-mono"),
              },
              {
                icon: "⊹",
                children: "Geist Mono [OFL] [DEFAULT]",
                onClick: () => Utilities.onHandleFontChange(""),
              },
              {
                icon: "⊹",
                children: "Iosevka Term [OFL]",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-iosevka-term"),
              },
              {
                icon: "⊹",
                children: "JetBrains Mono [OFL]",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-jet-brains-mono"),
              },
              {
                icon: "⊹",
                children: "SFMono Square [FOSS]",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-sfmono-square"),
              },
              {
                icon: "⊹",
                children: "Server Mono 0.0.6 [OFL]",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-server-mono"),
              },
              {
                icon: "⊹",
                children: "TX-02 Berkeley Mono™",
                onClick: () =>
                  Utilities.onHandleFontChange("font-use-berkeley-mono"),
              },
            ],
          },
          {
            hotkey: "⌃+T",
            body: "Theme",
            openHotkey: "ctrl+t",
            items: [
              {
                icon: "⊹",
                children: "Refined White [DEFAULT]",
                onClick: () => Utilities.onHandleThemeChange(""),
              },
              {
                icon: "⊹",
                children: "Black Midnight Vapor",
                onClick: () => Utilities.onHandleThemeChange("theme-dark"),
              },
              {
                icon: "⊹",
                children: "U-571 Code Red",
                onClick: () => Utilities.onHandleThemeChange("theme-black-red"),
              },
              {
                icon: "⊹",
                children: "Digital Bioluminescence",
                onClick: () =>
                  Utilities.onHandleThemeChange("theme-black-teal"),
              },
              {
                icon: "⊹",
                children: "Operation Safe Blue",
                onClick: () => Utilities.onHandleThemeChange("theme-blue"),
              },
              {
                icon: "⊹",
                children: "Neon Green Garden",
                onClick: () => Utilities.onHandleThemeChange("theme-green"),
              },
              {
                icon: "⊹",
                children: "Kirkland Signature AS/400",
                onClick: () =>
                  Utilities.onHandleThemeChange("theme-black-green"),
              },
            ],
          },
          {
            hotkey: "⌃+G",
            onClick: () => {
              toggleDebugGrid();
            },
            body: "Grid",
            selected: false,
          },
          ...items,
        ]}
      />
    </div>
  );
};

export default DefaultActionBar;
