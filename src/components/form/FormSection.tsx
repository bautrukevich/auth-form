import React from "react";

type FormSectionProps = React.PropsWithChildren<{}>;

export const FormSection = ({ children }: FormSectionProps) => {
  return <section className="form__section">{children}</section>;
};
