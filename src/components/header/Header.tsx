import React from "react";
import "./header.css";
import "../section/section.css";

import logo from "./logo.svg";

type HeaderProps = {
  companyName: string;
};

export const Header = ({ companyName }: HeaderProps) => {
  return (
    <header className="header section">
      <img src={logo} alt={`Логотип проекта ${companyName}`} className="logo header__logo" />
    </header>
  );
};
