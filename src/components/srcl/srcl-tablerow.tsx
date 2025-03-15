"use client";

import styles from "@/components/srcl/srcl-tablerow.module.scss";

import * as React from "react";

const TableRow = ({ children, ...rest }) => {
  return (
    <tr className={styles.root} tabIndex={0} {...rest}>
      {children}
    </tr>
  );
};

TableRow.displayName = "TableRow";

export default TableRow;
