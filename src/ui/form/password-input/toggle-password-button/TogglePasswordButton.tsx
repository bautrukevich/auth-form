import React from "react";

import styles from "./toggle-password-button.module.css";

type TogglePasswordButtonProps = React.PropsWithChildren<{
  onClick: () => void;
}>;

export const TogglePasswordButton = ({ onClick, children }: TogglePasswordButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={styles["toggle-password-button"]}
      type="button"
      aria-label="Показать пароль как простой текст. Предупреждение: это покажет ваш пароль на экране."
    >
      {children}
    </button>
  );
};
