import React from "react";

import styles from "./page.module.css";

type PageProps = React.PropsWithChildren<{}>;

export const Page = ({ children }: PageProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.page__content}>{children}</div>
    </div>
  );
};
