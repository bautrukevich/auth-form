import React from "react";
import "./form.css";

type FormProps = React.PropsWithChildren<{}>;

export const Form = ({ children }: FormProps) => {
  return (
    <form className="form" action="#" method="post" noValidate autoComplete="off">
      {children}
    </form>
  );
};
