import React from "react";

import styles from "./form.module.css";

type FormProps = React.PropsWithChildren<{
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}>;

export const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form className={styles.form} action="#" method="post" noValidate onSubmit={onSubmit}>
      {children}
    </form>
  );
};
