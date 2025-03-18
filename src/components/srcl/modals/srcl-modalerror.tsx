"use client";

import styles from "@/components/srcl/modals/srcl-modalerror.module.scss";

import * as React from "react";

import { useHotkeys } from "@/lib/modules/hotkeys";
import { useModals } from "@/components/srcl/page/srcl-modalcontext";

import ActionButton from "@/components/srcl/srcl-actionbutton";
import CardDouble from "@/components/srcl/srcl-carddouble";
import Grid from "@/components/srcl/srcl-grid";

interface ModalErrorProps {
  buttonText?: string | any;
  message: string | any;
  title?: string;
}

// TODO(jimmylee)
// Enter doesn't always work for some reason.
function ModalError({ message, title }: ModalErrorProps) {
  const { close } = useModals();

  useHotkeys("enter", () => close());

  return (
    <div className={styles.root}>
      <CardDouble title={title}>
        <br />
        {message}
        <Grid>
          <ul>
            <li>
              Press{" "}
              <ActionButton hotkey="⏎" onClick={() => close()}>
                ENTER
              </ActionButton>{" "}
              to continue.
            </li>
          </ul>
        </Grid>
      </CardDouble>
    </div>
  );
}

export default ModalError;
