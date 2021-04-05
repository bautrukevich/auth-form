import React from "react";
import styles from "./form-section.module.css";

type FormSectionProps = React.PropsWithChildren<{}>;

export const FormSection = ({ children }: FormSectionProps) => {
  return <section className={styles.form__section}>{children}</section>;
};
