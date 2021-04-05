import React, { FormEvent } from "react";

import { Page } from "./components/page/Page";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import { Wrapper } from "./components/wrapper/Wrapper";
import { Form } from "./components/form/Form";
import { FormSection } from "./components/form/form-section/FormSection";
import { Label } from "./components/form/label/Label";
import { Input } from "./components/form/input/Input";
import { PasswordInput } from "./components/form/password-input/PasswordInput";
import { Button } from "./components/form/button/Button";
import { Footer } from "./components/footer/Footer";
import { useFormWithValidation } from "./hooks/use-form-with-validation";

function App() {
  const { handleChange, values, isValid, errors } = useFormWithValidation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values, isValid, errors);
  };

  return (
    <Page>
      <Header companyName="Company Inc." />
      <Content>
        <Wrapper title="Войти">
          <Form onSubmit={handleSubmit}>
            <FormSection>
              <Label text="E-mail">
                <Input type="email" name="email" onChange={handleChange} error={errors["email"]} required />
              </Label>
            </FormSection>
            <FormSection>
              <Label text="Пароль">
                <PasswordInput
                  name="password"
                  onChange={handleChange}
                  error={errors["password"]}
                  required
                  minLength={8}
                />
              </Label>
            </FormSection>
            <Button type="submit" disabled={!isValid}>
              Войти
            </Button>
          </Form>
        </Wrapper>
      </Content>
      <Footer companyName="Company Inc." />
    </Page>
  );
}

export default App;
