import React, { useCallback } from "react";

import { useAuthState } from "../../infrastructure/contexts/AuthStateContext";

import { ErrorWrapper } from "../form/error-wrapper/ErrorWrapper";
import { ErrorText } from "../form/error-text/ErrorText";
import { Header } from "../header/Header";
import { Container } from "../container/Container";
import { AuthForm } from "../auth-form/AuthForm";

export const Login = () => {
  const { hasError, signInWithEmailAndPassword } = useAuthState();

  return (
    <Container>
      <Header companyName="Company, Inc." title="Glad to see you!" />
      {hasError && (
        <ErrorWrapper>
          <ErrorText>{hasError}</ErrorText>
        </ErrorWrapper>
      )}
      <AuthForm onSubmit={signInWithEmailAndPassword} />
    </Container>
  );
};
