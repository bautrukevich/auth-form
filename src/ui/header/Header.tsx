import React from "react";

import styles from "./header.module.css";

import logo from "./logo.svg";

type HeaderProps = {
  companyName: string;
  title: string;
};

export const Header = ({ companyName, title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt={`Логотип проекта ${companyName}`} className={styles.header__logo} />
      <h1 className={styles.header__title}>{title}</h1>
    </header>
  );
};
