import React from "react";
import clsx from "clsx";

import styles from "./header.module.css";
import sectionStyles from "../section/section.module.css";

import logo from "./logo.svg";

type HeaderProps = {
  companyName: string;
};

export const Header = ({ companyName }: HeaderProps) => {
  return (
    <header className={clsx(styles.header, sectionStyles.section)}>
      <img src={logo} alt={`Логотип проекта ${companyName}`} className={styles.header__logo} />
    </header>
  );
};
