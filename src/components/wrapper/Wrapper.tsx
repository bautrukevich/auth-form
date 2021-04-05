import React from "react";
import classNames from "classnames";

import styles from "./wrapper.module.css";
import sectionStyles from "../section/section.module.css";

type WrapperProps = React.PropsWithChildren<{
  title: string;
}>;

export const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <section className={classNames(styles.wrapper, sectionStyles.section)}>
      <h2 className={styles.wrapper__title}>{title}</h2>
      {children}
    </section>
  );
};
