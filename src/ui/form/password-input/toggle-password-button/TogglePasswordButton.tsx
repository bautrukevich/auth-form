import React from "react";

import styles from "./toggle-password-button.module.css";

type TogglePasswordButtonProps = React.PropsWithChildren<{}>;

export const TogglePasswordButton = ({ children }: TogglePasswordButtonProps) => {
  return (
    <button
      className={styles["form__toggle-password"]}
      type="button"
      aria-label="Показать пароль как простой текст. Предупреждение: это покажет ваш пароль на экране."
    >
      {children}
    </button>
  );
};
