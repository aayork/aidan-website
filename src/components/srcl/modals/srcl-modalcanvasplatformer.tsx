"use client";

import styles from "@/components/srcl/modals/srcl-modalcanvasplatformer.module.scss";

import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import { useModals } from "@/components/srcl/page/srcl-modalcontext";

import Button from "@/components/srcl/srcl-button";
import CanvasPlatformer from "@/components/srcl/srcl-canvasplatformer";
import Card from "@/components/srcl/srcl-card";

interface ModalCanvasPlatformerProps {
  buttonText?: string | any;
}

function ModalCanvasPlatformer({ buttonText }: ModalCanvasPlatformerProps) {
  const { close } = useModals();

  return (
    <div className={styles.root}>
      <Card title="ALERT">
        <CanvasPlatformer rows={12} />
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "Close" : buttonText}
        </Button>
      </Card>
    </div>
  );
}

export default ModalCanvasPlatformer;
