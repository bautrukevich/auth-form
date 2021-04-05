import React from "react";
import "./wrapper.css";

type WrapperProps = React.PropsWithChildren<{
  title: string;
}>;

export const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <section className="wrapper page__section">
      <h2 className="wrapper__title">{title}</h2>
      {children}
    </section>
  );
};
