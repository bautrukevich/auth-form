import React from "react";

import styles from "./error-wrapper.module.css";

type ErrorWrapperProps = React.PropsWithChildren<{}>;

export const ErrorWrapper = ({ children }: ErrorWrapperProps) => {
  return <div className={styles["error-wrapper"]}>{children}</div>;
};
