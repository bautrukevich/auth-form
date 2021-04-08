import { Auth } from "../Auth";
import { EmailAddress } from "../../../domain/auth/EmailAddress";
import { Password } from "../../../domain/auth/Password";
import { AuthStateKey } from "../../../domain/auth/AuthStateKey";
import { SecureStorage } from "../../SecureStorage";
import { AccessToken } from "../../../domain/auth/AccessToken";

export class Query {
  private readonly _email: string;
  private readonly _password: string;
  private readonly _authStateKey: string;

  private constructor({ email, password, authStateKey }: { email: string; password: string; authStateKey: string }) {
    this._email = email;
    this._password = password;
    this._authStateKey = authStateKey;
  }

  static create({ email, password, authStateKey }: { email: string; password: string; authStateKey: string }): Query {
    return new Query({ email, password, authStateKey });
  }

  get email(): EmailAddress {
    return EmailAddress.fromString(this._email);
  }

  get password(): Password {
    return Password.fromString(this._password);
  }

  get authStateKey(): AuthStateKey {
    return AuthStateKey.fromString(this._authStateKey);
  }
}

export class Handler {
  private readonly auth: Auth;
  private readonly storage: SecureStorage<AuthStateKey, AccessToken>;

  constructor({ auth, storage }: { auth: Auth; storage: SecureStorage<AuthStateKey, AccessToken> }) {
    this.auth = auth;
    this.storage = storage;
  }

  async handle(query: Query): Promise<AccessToken> {
    const accessToken = await this.auth.login(query.email, query.password);
    const authStateKey = query.authStateKey;

    await this.storage.setItem(authStateKey, accessToken);

    return Promise.resolve(accessToken);
  }
}
