import styles from "@/components/srcl/srcl-messageviewer.module.scss";
import { PropsWithChildren } from "react";

export default function MessageViewer({ children }: PropsWithChildren) {
  return (
    <div className={styles.message}>
      <div className={styles.left}>
        <div className={styles.bubble}>{children}</div>
      </div>
      <div className={styles.right}>
        <figure className={styles.triangle} />
      </div>
    </div>
  );
}
