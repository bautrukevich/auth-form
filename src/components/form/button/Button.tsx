import React from "react";

import styles from "./button.module.css";

type SubmitButtonProps = React.PropsWithChildren<{
  type: "button" | "submit" | "reset";
}>;

export const Button = ({ type, children }: SubmitButtonProps) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};
