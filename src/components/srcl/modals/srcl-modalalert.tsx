"use client";

import styles from "@/components/srcl/modals/srcl-modalalert.module.scss";

import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import { useModals } from "@/components/srcl/page/srcl-modalcontext";

import Button from "@/components/srcl/srcl-button";
import Card from "@/components/srcl/srcl-card";

interface ModalAlertProps {
  buttonText?: string | any;
  message: string;
}

function ModalAlert({ message, buttonText }: ModalAlertProps) {
  const { close } = useModals();

  return (
    <div className={styles.root}>
      <Card title="ALERT">
        {message}
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "Close" : buttonText}
        </Button>
      </Card>
    </div>
  );
}

export default ModalAlert;
