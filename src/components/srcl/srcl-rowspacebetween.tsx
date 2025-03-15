"use client";

import styles from "@/components/srcl/srcl-rowspacebetween.module.scss";

import * as React from "react";

type RowSpaceBetweenProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

const RowSpaceBetween = React.forwardRef<HTMLElement, RowSpaceBetweenProps>(
  ({ children, ...rest }, ref) => {
    return (
      <section className={styles.row} ref={ref} {...rest}>
        {children}
      </section>
    );
  },
);

RowSpaceBetween.displayName = "RowSpaceBetween";

export default RowSpaceBetween;
