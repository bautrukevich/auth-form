import React from "react";
import "./footer.css";
import "../section/section.css";

type FooterProps = {
  companyName: string;
};

export const Footer = ({ companyName }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section">
      <p className="footer__copyright">
        © {currentYear} {companyName}
      </p>
    </footer>
  );
};
