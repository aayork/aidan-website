"use client";

import styles from "@/components/srcl/modals/srcl-modalchess.module.scss";

import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import { useHotkeys } from "@/lib/modules/hotkeys";
import { useModals } from "@/components/srcl/page/srcl-modalcontext";

import Button from "@/components/srcl/srcl-button";
import CardDouble from "@/components/srcl/srcl-carddouble";
import Chessboard from "@/components/srcl/srcl-chessboard";

interface ModalErrorProps {
  buttonText?: string | any;
  board: string[][];
  title?: string;
}

function ModalChess({ board, buttonText, title }: ModalErrorProps) {
  const { close } = useModals();

  useHotkeys("enter", () => close());

  return (
    <div className={styles.root}>
      <CardDouble title={title} style={{ textAlign: "center" }}>
        <Chessboard board={board} />
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "CLOSE" : buttonText}
        </Button>
      </CardDouble>
    </div>
  );
}

export default ModalChess;
