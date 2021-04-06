import React from "react";

import styles from "./button.module.css";
import clsx from "clsx";

type SubmitButtonProps = React.PropsWithChildren<{
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}>;

export const Button = ({ type, disabled = false, children }: SubmitButtonProps) => {
  return (
    <button className={clsx(styles.button, disabled && styles.button_inactive)} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
