import React, { FormEvent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
import { useFormWithValidation } from "./hooks/useFormWithValidation";

function App() {
  const { handleChange, values, isValid, errors } = useFormWithValidation();
  const isDisabled = !isValid;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values, isValid, errors);
  };

  const isLoggedIn = false;

  return (
    <Page>
      <Header companyName="Company Inc." />
      <Content>
        <Switch>
          <Route exact path="/">
            {() => (isLoggedIn ? <Wrapper title="Добро пожаловать" /> : <Redirect to="/accounts/login" />)}
          </Route>
          <Route exact path="/accounts/login">
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
                <Button type="submit" disabled={isDisabled}>
                  Войти
                </Button>
              </Form>
            </Wrapper>
          </Route>
        </Switch>
      </Content>
      <Footer companyName="Company Inc." />
    </Page>
  );
}

export default App;
