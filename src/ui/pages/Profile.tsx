import React from "react";

import { useAuthState } from "../../infrastructure/contexts/AuthStateContext";

import { Container } from "../container/Container";
import { ErrorWrapper } from "../form/error-wrapper/ErrorWrapper";
import { ErrorText } from "../form/error-text/ErrorText";
import { Header } from "../header/Header";
import { UserInfo } from "../user-info/UserInfo";
import { UserInfoRow } from "../user-info/user-info-row/UserInfoRow";
import { Button } from "../form/button/Button";

export const Profile = () => {
  const { hasError, user, signOut } = useAuthState();

  return (
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
  );
};
