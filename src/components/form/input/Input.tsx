import React from "react";
import "./input.css";

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  type?: string;
};

export const Input = ({ type = "text", ...rest }: InputProps) => {
  return (
    <>
      <input className="input" type={type} {...rest} />
      <span className="input-error" />
    </>
  );
};
