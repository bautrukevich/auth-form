import React from "react";

import styles from "./button.module.css";
import clsx from "clsx";

type SubmitButtonProps = React.PropsWithChildren<{
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}>;

export const Button = ({ type = "button", disabled = false, onClick, children }: SubmitButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, disabled && styles.button_inactive)}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
