import React from "react";

import { Input } from "./Input";
import { TogglePasswordButton } from "./TogglePasswordButton";

export const PasswordInput = () => {
  return (
    <>
      <Input type="password" />
      <TogglePasswordButton>Показать пароль</TogglePasswordButton>
    </>
  );
};
