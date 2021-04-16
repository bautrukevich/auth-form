import React, { FormEvent, useCallback, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { Container } from "./ui/container/Container";
import { Header } from "./ui/header/Header";
import { Form } from "./ui/form/Form";
import { FormSection } from "./ui/form/form-section/FormSection";
import { Label } from "./ui/form/label/Label";
import { Input } from "./ui/form/input/Input";
import { PasswordInput } from "./ui/form/password-input/PasswordInput";
import { Button } from "./ui/form/button/Button";
import { UserInfo } from "./ui/user-info/UserInfo";
import { UserInfoRow } from "./ui/user-info/user-info-row/UserInfoRow";
import { ErrorText } from "./ui/form/error-text/ErrorText";
import { ErrorWrapper } from "./ui/form/error-wrapper/ErrorWrapper";

import { useFormWithValidation } from "./infrastructure/hooks/useFormWithValidation";
import { useAuthState } from "./infrastructure/contexts/AuthStateContext";

function App() {
  const history = useHistory();
  const { isLoggedIn, hasError, signInWithEmailAndPassword, restoreToken, user, signOut } = useAuthState();
  const { handleChange, values, isValid, errors } = useFormWithValidation();
  const isDisabled = !isValid;
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await signInWithEmailAndPassword(values["email"], values["password"]);
    },
    [signInWithEmailAndPassword, values]
  );

  useEffect(() => {
    (async () => {
      await restoreToken();
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [history, isLoggedIn]);

  return (
    <Switch>
      <Route exact path="/">
        {() =>
          isLoggedIn ? (
            <Container isWide>
              {hasError && (
                <ErrorWrapper>
                  <ErrorText>{hasError}</ErrorText>
                </ErrorWrapper>
              )}
              <Header companyName="Company, Inc." title={`Hello, ${user?.fullName}!`} />
              <UserInfo>
                <UserInfoRow name="Name" value={user?.fullName} />
                <UserInfoRow name="E-mail" value={user?.emailAddress} />
              </UserInfo>
              <Button onClick={signOut}>Sign out</Button>
            </Container>
          ) : (
            <Redirect to="/accounts/login" />
          )
        }
      </Route>
      <Route exact path="/accounts/login">
        <Container>
          <Header companyName="Company, Inc." title="Glad to see you!" />
          {hasError && (
            <ErrorWrapper>
              <ErrorText>{hasError}</ErrorText>
            </ErrorWrapper>
          )}
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
        </Container>
      </Route>
    </Switch>
  );
}

export default App;
