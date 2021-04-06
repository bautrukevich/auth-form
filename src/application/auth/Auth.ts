import { EmailAddress } from "../../domain/auth/EmailAddress";
import { Password } from "../../domain/auth/Password";
import { AccessToken } from "../../domain/auth/AccessToken";

export interface Auth {
  login(email: EmailAddress, password: Password): Promise<AccessToken>;
  logout(): Promise<void>;
  checkToken(token: AccessToken): Promise<boolean>;
}
