import React from "react";

type PageProps = React.PropsWithChildren<{}>;

export const Page = ({ children }: PageProps) => {
  return (
    <div className="page">
      <div className="page__content">{children}</div>
    </div>
  );
};
