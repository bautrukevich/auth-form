import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./input.module.css";

type InputProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, type = "text", onChange, error, ...rest }: InputProps) => {
  return (
    <>
      <input className={styles.input} type={type} name={name} onChange={onChange} {...rest} />
      {error && <span className={clsx(styles["input-error"], styles["input-error_active"])}>{error}</span>}
    </>
  );
};
