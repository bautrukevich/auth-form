import React from "react";

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  type?: string;
};

export const Input = ({ type = "text", ...rest }: InputProps) => {
  return (
    <>
      <input className="form__input" type={type} {...rest} />
      <span className="form__input-error" />
    </>
  );
};
