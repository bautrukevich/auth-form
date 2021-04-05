import { ChangeEventHandler, useState } from "react";

export const useFormWithValidation = () => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const form = target.closest("form");

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(form !== null && form.checkValidity());
  };

  return { values, handleChange, errors, isValid };
};
