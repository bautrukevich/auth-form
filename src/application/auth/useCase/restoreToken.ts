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
  private readonly storage: SecureStorage<AccessToken>;

  constructor({ auth, storage }: { auth: Auth; storage: SecureStorage<AccessToken> }) {
    this.auth = auth;
    this.storage = storage;
  }

  async handle(query: Query): Promise<AccessToken | null> {
    const authStateKey = query.authStateKey.asString();

    return this.storage.getItem(authStateKey);
  }
}
