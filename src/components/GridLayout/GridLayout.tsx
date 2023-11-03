"use client"
import styles from "./styles.module.css";

export const GridLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.grid}>{children}</div>;
};
