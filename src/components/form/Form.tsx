import React from "react";
import "./form.css";

type FormProps = React.PropsWithChildren<{
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}>;

export const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form className="form" action="#" method="post" noValidate onSubmit={onSubmit}>
      {children}
    </form>
  );
};
