import React from "react";

type TogglePasswordButtonProps = React.PropsWithChildren<{}>;

export const TogglePasswordButton = ({ children }: TogglePasswordButtonProps) => {
  return (
    <button
      className="form__toggle-password"
      type="button"
      aria-label="Показать пароль как простой текст. Предупреждение: это покажет ваш пароль на экране."
    >
      {children}
    </button>
  );
};
