import { Auth } from "../Auth";
import { AuthStateKey } from "../../../domain/auth/AuthStateKey";
import { SecureStorage } from "../../SecureStorage";
import { AccessToken } from "../../../domain/auth/AccessToken";

export class Query {
  private readonly _authStateKey: string;

  private constructor({ authStateKey }: { authStateKey: string }) {
    this._authStateKey = authStateKey;
  }

  static create({ authStateKey }: { authStateKey: string }): Query {
    return new Query({ authStateKey });
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

  async handle(command: Query): Promise<AccessToken | null> {
    const authStateKey = command.authStateKey;
    const accessToken = await this.storage.getItem(authStateKey);

    if (accessToken !== null) {
      const isValid = await this.auth.checkToken(accessToken);

      if (!isValid) {
        await this.storage.removeItem(authStateKey);

        return Promise.resolve(null);
      }

      return Promise.resolve(accessToken);
    }

    return Promise.resolve(null);
  }
}
