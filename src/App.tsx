import React, { FormEvent, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { Page } from "./ui/page/Page";
import { Header } from "./ui/header/Header";
import { Content } from "./ui/content/Content";
import { Wrapper } from "./ui/wrapper/Wrapper";
import { Form } from "./ui/form/Form";
import { FormSection } from "./ui/form/form-section/FormSection";
import { Label } from "./ui/form/label/Label";
import { Input } from "./ui/form/input/Input";
import { PasswordInput } from "./ui/form/password-input/PasswordInput";
import { Button } from "./ui/form/button/Button";
import { Footer } from "./ui/footer/Footer";

import { useFormWithValidation } from "./infrastructure/hooks/useFormWithValidation";
import { useAuthState } from "./infrastructure/contexts/AuthStateContext";

function App() {
  const history = useHistory();
  const { isLoggedIn, accessToken, signInWithEmailAndPassword, hasError, restoreToken, signOut } = useAuthState();
  const { handleChange, values, isValid, errors } = useFormWithValidation();
  const isDisabled = !isValid;
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values, isValid, errors);
    await signInWithEmailAndPassword(values["email"], values["password"]);
  };

  console.log(isLoggedIn, accessToken, hasError);

  useEffect(() => {
    (async () => {
      await restoreToken();
    })();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [history, isLoggedIn]);

  return (
    <Page>
      <Header companyName="Company Inc." />
      <Content>
        <Switch>
          <Route exact path="/">
            {() =>
              isLoggedIn ? (
                <Wrapper title="Добро пожаловать">
                  <Button onClick={signOut}>Выйти</Button>
                </Wrapper>
              ) : (
                <Redirect to="/accounts/login" />
              )
            }
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
