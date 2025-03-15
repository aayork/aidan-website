"use client";

import styles from "@/components/srcl/modals/srcl-modalmatrixmodes.module.scss";

import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import { useModals } from "@/components/srcl/page/srcl-modalcontext";

import Button from "@/components/srcl/srcl-button";
import Card from "@/components/srcl/srcl-card";
import MatrixLoader from "@/components/srcl/srcl-matrixloader";

interface ModalMatrixModesProps {
  buttonText?: string | any;
}

function ModalMatrixModes({ buttonText }: ModalMatrixModesProps) {
  const { close } = useModals();

  return (
    <div className={styles.root}>
      <Card title="MATRIX MODES">
        <Card title="KATAKANA DEFAULT">
          <MatrixLoader rows={32} mode="katakana" />
        </Card>
        <Card title="GREEK LTR">
          <MatrixLoader direction="left-to-right" rows={8} mode="greek" />
        </Card>
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "Close" : buttonText}
        </Button>
      </Card>
    </div>
  );
}

export default ModalMatrixModes;
