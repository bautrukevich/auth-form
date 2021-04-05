import React from "react";
import "./label.css";

type LabelProps = React.PropsWithChildren<{
  text: string;
}>;

export const Label = ({ text, children }: LabelProps) => {
  return (
    <label className="label">
      <span className="label-text">{text}</span>
      {children}
    </label>
  );
};
