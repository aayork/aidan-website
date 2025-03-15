"use client";

import styles from "@/components/srcl/srcl-table.module.scss";

import * as React from "react";

const Table = ({ children, ...rest }) => {
  return (
    <table className={styles.root} {...rest}>
      <tbody className={styles.body}>{children}</tbody>
    </table>
  );
};

Table.displayName = "Table";

export default Table;
