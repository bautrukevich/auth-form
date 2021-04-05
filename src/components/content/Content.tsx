import React from "react";

import styles from "./content.module.css";

type ContentProps = React.PropsWithChildren<{}>;

export const Content = ({ children }: ContentProps) => {
  return <main className={styles.content}>{children}</main>;
};
