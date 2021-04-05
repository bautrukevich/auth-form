import React from "react";
import "./content.css";

type ContentProps = React.PropsWithChildren<{}>;

export const Content = ({ children }: ContentProps) => {
  return <main className="content">{children}</main>;
};
