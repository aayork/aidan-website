"use client";

import styles from "@/components/srcl/srcl-blockloader.module.scss";
import * as React from "react";

const SEQUENCES = [
  ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"],
  ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"],
  ["▖", "▘", "▝", "▗"],
  ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", "▇", "▆", "▅", "▄", "▃", "▁"],
  ["▉", "▊", "▋", "▌", "▍", "▎", "▏", "▎", "▍", "▌", "▋", "▊", "▉"],
  ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"],
  ["┤", "┘", "┴", "└", "├", "┌", "┬", "┐"],
  ["◢", "◣", "◤", "◥"],
  ["◰", "◳", "◲", "◱"],
  ["◴", "◷", "◶", "◵"],
  ["◐", "◓", "◑", "◒"],
];

interface BlockLoaderProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  mode?: number;
}

const BlockLoader: React.FC<BlockLoaderProps> = ({ mode = 0 }) => {
  const [index, setIndex] = React.useState(0);
  const intervalRef = React.useRef<number | null>(null);

  const sequence = SEQUENCES[mode] || ["�"]; // Fallback to a default character

  React.useEffect(() => {
    // Clear previous interval if it exists
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start the interval
    intervalRef.current = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    }, 100);

    // Cleanup interval on unmount or mode change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [sequence.length]); // Only runs when sequence changes

  return <span className={styles.root}>{sequence[index]}</span>;
};

export default BlockLoader;
