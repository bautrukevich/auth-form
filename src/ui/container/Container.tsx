import React from "react";

import styles from "./container.module.css";
import clsx from "clsx";

type ContainerProps = React.PropsWithChildren<{
  isWide?: boolean;
}>;

export const Container = ({ isWide = false, children }: ContainerProps) => {
  return <div className={clsx(styles.container, isWide && styles.container_wide)}>{children}</div>;
};
