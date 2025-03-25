"use client";

import styles from "@/components/srcl/srcl-dropdownmenutrigger.module.scss";

import * as Position from "@/lib/srcl-position";
import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import DropdownMenu from "@/components/srcl/srcl-dropdownmenu";
import OutsideElementEvent from "@/components/srcl/detectors/srcl-outsideelementevent";

import { createPortal } from "react-dom";
import { useHotkeys } from "@/lib/modules/hotkeys";

interface DropdownMenuTriggerProps {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  items: any;
  hotkey?: string;
}

function DropdownMenuTrigger({
  children,
  items,
  hotkey,
}: DropdownMenuTriggerProps) {
  const [open, setOpen] = React.useState(false);
  const [focusChildren, setFocusChildren] = React.useState(false);
  const [willClose, setWillClose] = React.useState(false);
  const [placement, setPlacement] =
    React.useState<Position.Placement>("bottom");
  const [position, setPosition] = React.useState<{ top: number; left: number }>(
    {
      top: 0,
      left: 0,
    },
  );

  const triggerRef = React.useRef<HTMLElement>(null);
  const elementRef = React.useRef<HTMLDivElement>(null);

  const onClick = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(true);
  }, []);

  const onOutsideEvent = React.useCallback(() => setOpen(false), []);
  const onClose = React.useCallback(() => setWillClose(true), []);

  // Call the useHotkeys hook unconditionally
  React.useEffect(() => {
    if (hotkey) {
      useHotkeys(hotkey, () => {
        setOpen(!open);
      });
    }
  }, [hotkey, open]); // Added `open` as a dependency here to ensure hotkey works correctly

  React.useEffect(() => {
    if (focusChildren) {
      const element = elementRef.current;
      if (element) {
        const firstFocusable = Utilities.findFocusableDescendant(element);
        if (firstFocusable) {
          firstFocusable.focus();
        } else {
          element.focus();
        }
      }
      setFocusChildren(false);
    }
  }, [focusChildren]);

  React.useEffect(() => {
    if (willClose) {
      setOpen(false);
      setWillClose(false);
    }
  }, [willClose]);

  React.useEffect(() => {
    if (!open || !triggerRef.current || !elementRef.current) return;

    const updatePosition = () => {
      const { placement, position } = Position.calculate(
        triggerRef.current!,
        elementRef.current!,
      );
      setPlacement(placement);
      setPosition(position);
    };

    updatePosition();
    setFocusChildren(true);

    const handleResizeOrScroll = () => updatePosition();
    const observer = new MutationObserver(() => updatePosition());
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll, true);

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll, true);
      observer.disconnect();
    };
  }, [open]);

  const element = open
    ? createPortal(
        <OutsideElementEvent onOutsideEvent={onOutsideEvent}>
          <DropdownMenu
            onClose={onClose}
            ref={elementRef}
            items={items}
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: `var(--z-index-page-dropdown-menus)`,
            }}
            role="dialog"
            aria-modal="true"
          />
        </OutsideElementEvent>,
        document.body,
      )
    : null;

  return (
    <div className={styles.root}>
      {React.cloneElement(children, {
        tabIndex: 0,
        onClick,
        ref: triggerRef,
      })}
      {element}
    </div>
  );
}

export default DropdownMenuTrigger;
