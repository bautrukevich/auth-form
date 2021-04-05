import React from "react";

import styles from "./button.module.css";

type SubmitButtonProps = React.PropsWithChildren<{
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}>;

export const Button = ({ type, disabled = false, children }: SubmitButtonProps) => {
  return (
    <button className={styles.button} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
