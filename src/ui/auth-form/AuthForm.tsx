import React, { ChangeEventHandler, FormEvent, useState } from "react";

import { FormSection } from "../form/form-section/FormSection";
import { Label } from "../form/label/Label";
import { Input } from "../form/input/Input";
import { PasswordInput } from "../form/password-input/PasswordInput";
import { Button } from "../form/button/Button";
import { Form } from "../form/Form";

type AuthFormProps = {
  onSubmit: (email: string, password: string) => Promise<void>;
};

export const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const form = target.closest("form");

    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: target.validationMessage }));
    setIsDisabled(form !== null && !form.checkValidity());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    await onSubmit(values["email"], values["password"]);
  };

  console.log(values);

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
