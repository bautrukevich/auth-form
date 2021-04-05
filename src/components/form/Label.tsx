import React from "react";

type LabelProps = React.PropsWithChildren<{
  text: string;
}>;

export const Label = ({ text, children }: LabelProps) => {
  return (
    <label className="form__label">
      <span className="form__label-text">{text}</span>
      {children}
    </label>
  );
};
