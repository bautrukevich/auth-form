import { AuthInvalidCredentials, FakeAuth } from "../FakeAuth";
import { AccessToken } from "../../domain/auth/AccessToken";
import { EmailAddress } from "../../domain/auth/EmailAddress";
import { Password } from "../../domain/auth/Password";

describe("FakeAuth", () => {
  it("should be able to check token and be truthy", async () => {
    const auth = new FakeAuth();
    const accessToken = AccessToken.fromString("secret_token");

    await expect(auth.checkToken(accessToken)).resolves.toBeTruthy();
  });
  it("should be able to check token and be falsy", async () => {
    const auth = new FakeAuth();
    const accessToken = AccessToken.fromString("any_invalid_token");

    await expect(auth.checkToken(accessToken)).resolves.toBeFalsy();
  });
  it("should be able to login with valid credentials", async () => {
    const auth = new FakeAuth();

    const emailAddress = EmailAddress.fromString("valid@email.com");
    const password = Password.fromString("secret_password");

    const accessToken = AccessToken.fromString("secret_token");

    await expect(auth.login(emailAddress, password)).resolves.toStrictEqual(accessToken);
  });
  it("should not be able to login with invalid credentials", async () => {
    const auth = new FakeAuth();

    const emailAddress = EmailAddress.fromString("any@email.com");
    const password = Password.fromString("any_invalid_password");

    await expect(auth.login(emailAddress, password)).rejects.toThrow(AuthInvalidCredentials);
  });
  it("should be able to logout", async () => {
    const auth = new FakeAuth();

    await expect(auth.logout()).resolves.not.toThrow();
  });
});
