import React from "react";
import styles from "./input.module.css";

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  type?: string;
};

export const Input = ({ type = "text", ...rest }: InputProps) => {
  return (
    <>
      <input className={styles.input} type={type} {...rest} />
      <span className={styles["input-error"]} />
    </>
  );
};
