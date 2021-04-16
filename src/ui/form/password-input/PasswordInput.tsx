import React, { ChangeEventHandler, InputHTMLAttributes, useState } from "react";

import { Input } from "../input/Input";
import { TogglePasswordButton } from "./toggle-password-button/TogglePasswordButton";

type PasswordInputProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = ({ name, error, onChange, ...rest }: PasswordInputProps) => {
  const [inputType, setInputType] = useState<string>("password");
  const [toggleButtonText, setToggleButtonText] = useState<string>("Показать пароль");
  const handleClick = () => {
    if (inputType === "password") {
      setInputType(() => "text");
      setToggleButtonText(() => "Спрятать пароль");
    } else if (inputType === "text") {
      setInputType(() => "password");
      setToggleButtonText(() => "Показать пароль");
    }
  };

  return (
    <>
      <Input name={name} type={inputType} onChange={onChange} error={error} {...rest} />
      <TogglePasswordButton onClick={handleClick}>{toggleButtonText}</TogglePasswordButton>
    </>
  );
};
