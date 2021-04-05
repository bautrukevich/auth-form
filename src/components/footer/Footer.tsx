import React from "react";
import "./footer.css";

type FooterProps = {
  copyright: string;
};

export const Footer = ({ copyright }: FooterProps) => {
  return (
    <footer className="footer page__section">
      <p className="footer__copyright">{copyright}</p>
    </footer>
  );
};
