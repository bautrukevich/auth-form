import React from "react";
import clsx from "clsx";

import styles from "./error-text.module.css";

type ErrorProps = React.PropsWithChildren<{}>;

export const ErrorText = ({ children }: ErrorProps) => {
  return <span className={clsx(styles["error-text"], children && styles["error-text_active"])}>{children}</span>;
};
