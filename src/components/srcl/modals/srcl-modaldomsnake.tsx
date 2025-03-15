"use client";

import styles from "@/components/srcl/modals/srcl-modalcanvassnake.module.scss";

import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import { useModals } from "@/components/srcl/page/srcl-modalcontext";

import Button from "@/components/srcl/srcl-button";
import Card from "@/components/srcl/srcl-card";
import DOMSnake from "@/components/srcl/srcl-domsnake";

interface ModalDOMSnakeProps {
  buttonText?: string | any;
}

function ModalDOMSnake({ buttonText }: ModalDOMSnakeProps) {
  const { close } = useModals();

  return (
    <div className={styles.root}>
      <Card title="DOM SNAKE">
        <DOMSnake height={14} width={34} />
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "Close" : buttonText}
        </Button>
      </Card>
    </div>
  );
}

export default ModalDOMSnake;
