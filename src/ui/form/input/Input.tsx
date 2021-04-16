import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import styles from "./input.module.css";

import { ErrorText } from "../error-text/ErrorText";

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
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};
