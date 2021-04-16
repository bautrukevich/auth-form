import { AuthInvalidCredentials, FakeAuth } from "../FakeAuth";
import { AccessToken } from "../../domain/auth/AccessToken";
import { EmailAddress } from "../../domain/auth/EmailAddress";
import { Password } from "../../domain/auth/Password";
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  INVALID_SECRET_TOKEN,
  SECRET_EMAIL,
  SECRET_PASSWORD,
  SECRET_TOKEN,
} from "../data";

describe("FakeAuth", () => {
  it("should be able to check token and be truthy", async () => {
    const auth = new FakeAuth();
    const accessToken = AccessToken.fromString(SECRET_TOKEN);

    await expect(auth.checkToken(accessToken)).resolves.toBeTruthy();
  });
  it("should be able to check token and be falsy", async () => {
    const auth = new FakeAuth();
    const accessToken = AccessToken.fromString(INVALID_SECRET_TOKEN);

    await expect(auth.checkToken(accessToken)).resolves.toBeFalsy();
  });
  it("should be able to login with valid credentials", async () => {
    const auth = new FakeAuth();

    const emailAddress = EmailAddress.fromString(SECRET_EMAIL);
    const password = Password.fromString(SECRET_PASSWORD);

    const accessToken = AccessToken.fromString(SECRET_TOKEN);

    await expect(auth.login(emailAddress, password)).resolves.toStrictEqual(accessToken);
  });
  it("should not be able to login with invalid credentials", async () => {
    const auth = new FakeAuth();

    const emailAddress = EmailAddress.fromString(INVALID_EMAIL);
    const password = Password.fromString(INVALID_PASSWORD);

    await expect(auth.login(emailAddress, password)).rejects.toThrow(AuthInvalidCredentials);
  });
  it("should be able to logout", async () => {
    const auth = new FakeAuth();

    await expect(auth.logout()).resolves.not.toThrow();
  });
});
