import React, { ChangeEventHandler, InputHTMLAttributes } from "react";

import { Input } from "../input/Input";
import { TogglePasswordButton } from "./toggle-password-button/TogglePasswordButton";

type PasswordInputProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = ({ name, error, onChange, ...rest }: PasswordInputProps) => {
  return (
    <>
      <Input name={name} type="password" onChange={onChange} error={error} {...rest} />
      <TogglePasswordButton>Показать пароль</TogglePasswordButton>
    </>
  );
};
