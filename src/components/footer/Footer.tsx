import React from "react";
import classNames from "classnames";

import styles from "./footer.module.css";
import sectionStyles from "../section/section.module.css";

type FooterProps = {
  companyName: string;
};

export const Footer = ({ companyName }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classNames(styles.footer, sectionStyles.section)}>
      <p className={styles.footer__copyright}>
        © {currentYear} {companyName}
      </p>
    </footer>
  );
};
