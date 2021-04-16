import React from "react";

import styles from "./user-info.module.css";

type UserInfoProps = React.PropsWithChildren<{}>;

export const UserInfo = ({ children }: UserInfoProps) => {
  return <div className={styles["user-info"]}>{children}</div>;
};
