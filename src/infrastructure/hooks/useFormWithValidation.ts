import { ChangeEventHandler, useState } from "react";

export const useFormWithValidation = () => {
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

  return { values, handleChange, errors, isDisabled };
};
