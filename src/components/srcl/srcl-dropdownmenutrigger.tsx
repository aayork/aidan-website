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
    { top: 0, left: 0 },
  );

  const triggerRef = React.useRef<HTMLElement>(null);
  const elementRef = React.useRef<HTMLDivElement>(null);

  const onClick = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(true);
  }, []);

  const onOutsideEvent = React.useCallback(() => setOpen(false), []);
  const onClose = React.useCallback(() => setWillClose(true), []);

  // Call the useHotkeys hook unconditionally, but handle logic inside a callback
  useHotkeys(hotkey || '', () => {
    if (hotkey) {
      setOpen(!open);
    }
  });

  React.useEffect(() => {
    if (focusChildren) {
      const element = elementRef.current;
      if (element) {
        const firstFocusable = Utilities
