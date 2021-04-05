import React from "react";

type SubmitButtonProps = React.PropsWithChildren<{}>;

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <button className="form__submit" type="submit">
      {children}
    </button>
  );
};
