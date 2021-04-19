import React, { FormEvent } from "react";

import { FormSection } from "../form/form-section/FormSection";
import { Label } from "../form/label/Label";
import { Input } from "../form/input/Input";
import { PasswordInput } from "../form/password-input/PasswordInput";
import { Button } from "../form/button/Button";
import { Form } from "../form/Form";
import { useFormWithValidation } from "../../infrastructure/hooks/useFormWithValidation";

type AuthFormProps = {
  onSubmit: (email: string, password: string) => Promise<void>;
};

export const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const { values, errors, isDisabled, handleChange } = useFormWithValidation();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(values["email"], values["password"]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <Label text="E-mail">
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            error={errors["email"]}
            placeholder="your@email.com"
            required
          />
        </Label>
      </FormSection>
      <FormSection>
        <Label text="Password">
          <PasswordInput
            name="password"
            onChange={handleChange}
            error={errors["password"]}
            placeholder="········"
            required
            minLength={8}
          />
        </Label>
      </FormSection>
      <Button type="submit" disabled={isDisabled}>
        Sign in
      </Button>
    </Form>
  );
};
