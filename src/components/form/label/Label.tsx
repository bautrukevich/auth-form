import React from "react";
import styles from "./label.module.css";

type LabelProps = React.PropsWithChildren<{
  text: string;
}>;

export const Label = ({ text, children }: LabelProps) => {
  return (
    <label className={styles.label}>
      <span className={styles["label-text"]}>{text}</span>
      {children}
    </label>
  );
};
