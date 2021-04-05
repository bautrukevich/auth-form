import React from "react";
import "./wrapper.css";
import "../section/section.css";

type WrapperProps = React.PropsWithChildren<{
  title: string;
}>;

export const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <section className="wrapper section">
      <h2 className="wrapper__title">{title}</h2>
      {children}
    </section>
  );
};
