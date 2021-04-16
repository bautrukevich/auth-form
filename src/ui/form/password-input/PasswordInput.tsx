import React, { ChangeEventHandler, InputHTMLAttributes, useState } from "react";

import { Input } from "../input/Input";
import { TogglePasswordButton } from "./toggle-password-button/TogglePasswordButton";

type PasswordInputProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = ({ name, error, onChange, ...rest }: PasswordInputProps) => {
  const SHOW_PASSWORD = "Show password";
  const HIDE_PASSWORD = "Hide password";
  const [inputType, setInputType] = useState<string>("password");
  const [toggleButtonText, setToggleButtonText] = useState<string>(SHOW_PASSWORD);
  const handleClick = () => {
    if (inputType === "password") {
      setInputType(() => "text");
      setToggleButtonText(() => HIDE_PASSWORD);
    } else if (inputType === "text") {
      setInputType(() => "password");
      setToggleButtonText(() => SHOW_PASSWORD);
    }
  };

  return (
    <>
      <Input name={name} type={inputType} onChange={onChange} error={error} {...rest} />
      <TogglePasswordButton onClick={handleClick}>{toggleButtonText}</TogglePasswordButton>
    </>
  );
};
