import styles from "@/components/srcl/srcl-grid.module.scss";

import * as React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.grid} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
