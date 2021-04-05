import React from "react";
import classNames from "classnames";

import styles from "./header.module.css";
import sectionStyles from "../section/section.module.css";

import logo from "./logo.svg";

type HeaderProps = {
  companyName: string;
};

export const Header = ({ companyName }: HeaderProps) => {
  return (
    <header className={classNames(styles.header, sectionStyles.section)}>
      <img src={logo} alt={`Логотип проекта ${companyName}`} className={styles.header__logo} />
    </header>
  );
};
