import { Auth } from "../application/auth/Auth";
import { AccessToken } from "../domain/auth/AccessToken";
import { Password } from "../domain/auth/Password";
import { EmailAddress } from "../domain/auth/EmailAddress";

export class FakeAuth implements Auth {
  private static readonly SECRET_TOKEN = AccessToken.fromString("secret_token");

  private static readonly SECRET_EMAIL = EmailAddress.fromString("my@email.com");
  private static readonly SECRET_PASSWORD = Password.fromString("my@email.com");

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

      reject();
    });
  }
  logout(): Promise<void> {
    return Promise.resolve();
  }
}
