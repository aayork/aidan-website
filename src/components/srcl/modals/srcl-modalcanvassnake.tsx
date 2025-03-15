"use client";

import styles from "@/components/srcl/modals/srcl-modalcanvassnake.module.scss";

import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import { useModals } from "@/components/srcl/page/srcl-modalcontext";

import Button from "@/components/srcl/srcl-button";
import CanvasSnake from "@/components/srcl/srcl-canvassnake";
import Card from "@/components/srcl/srcl-card";

interface ModalCanvasSnakeProps {
  buttonText?: string | any;
}

function ModalCanvasSnake({ buttonText }: ModalCanvasSnakeProps) {
  const { close } = useModals();

  return (
    <div className={styles.root}>
      <Card title="CANVAS PLATFORMER">
        <CanvasSnake rows={12} />
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "Close" : buttonText}
        </Button>
      </Card>
    </div>
  );
}

export default ModalCanvasSnake;
