import React from "react";

import styles from "./user-info-row.module.css";

type UserInfoRowProps = {
  name: string;
  value?: string;
};

export const UserInfoRow = ({ name, value }: UserInfoRowProps) => {
  return (
    <div className={styles["user-info-row"]}>
      <p className={styles["user-info-row__key"]}>{name}</p>
      <p className={styles["user-info-row__value"]}>{value ?? "Неизвестно"}</p>
    </div>
  );
};
