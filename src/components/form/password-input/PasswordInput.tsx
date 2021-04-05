import React from "react";

import { Input } from "../input/Input";
import { TogglePasswordButton } from "./toggle-password-button/TogglePasswordButton";

export const PasswordInput = () => {
  return (
    <>
      <Input type="password" />
      <TogglePasswordButton>Показать пароль</TogglePasswordButton>
    </>
  );
};
