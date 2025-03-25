import styles from "@/components/srcl/srcl-message.module.scss";
import { PropsWithChildren } from "react";

export default function Message({ children }: PropsWithChildren) {
  return (
    <div className={styles.message}>
      <div className={styles.left}>
        <figure className={styles.triangle} />
      </div>
      <div className={styles.right}>
        <div className={styles.bubble}>{children}</div>
      </div>
    </div>
  );
}
