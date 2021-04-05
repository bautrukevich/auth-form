import React from "react";
import "./button.css";

type SubmitButtonProps = React.PropsWithChildren<{
  type: "button" | "submit" | "reset";
}>;

export const Button = ({ type, children }: SubmitButtonProps) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};
