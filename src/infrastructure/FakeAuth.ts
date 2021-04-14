import { Auth } from "../application/auth/Auth";
import { AccessToken } from "../domain/auth/AccessToken";
import { Password } from "../domain/auth/Password";
import { EmailAddress } from "../domain/auth/EmailAddress";

export class AuthInvalidCredentials extends Error {
  constructor() {
    super("Invalid credentials.");
    this.name = "AuthInvalidCredentials";

    Object.setPrototypeOf(this, AuthInvalidCredentials.prototype);
  }
}

export class FakeAuth implements Auth {
  private static readonly SECRET_TOKEN = AccessToken.fromString("secret_token");

  private static readonly SECRET_EMAIL = EmailAddress.fromString("valid@email.com");
  private static readonly SECRET_PASSWORD = Password.fromString("secret_password");

  checkToken(token: AccessToken): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (token.isEqualTo(FakeAuth.SECRET_TOKEN)) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
  login(email: EmailAddress, password: Password): Promise<AccessToken> {
    return new Promise<AccessToken>((resolve, reject) => {
      if (email.isEqualTo(FakeAuth.SECRET_EMAIL) && password.isEqualTo(FakeAuth.SECRET_PASSWORD)) {
        resolve(FakeAuth.SECRET_TOKEN);
      }

      reject(new AuthInvalidCredentials());
    });
  }
  logout(): Promise<void> {
    return Promise.resolve();
  }
}
