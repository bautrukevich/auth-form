import { Auth } from "../Auth";
import { SecureStorage } from "../../SecureStorage";
import { AuthStateKey } from "../../../domain/auth/AuthStateKey";
import { AccessToken } from "../../../domain/auth/AccessToken";

export class Command {
  private readonly _authStateKey: string;

  private constructor({ authStateKey }: { authStateKey: string }) {
    this._authStateKey = authStateKey;
  }

  static create({ authStateKey }: { authStateKey: string }): Command {
    return new Command({ authStateKey });
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

  async handle(command: Command): Promise<void> {
    await this.auth.logout();

    const authStateKey = command.authStateKey.asString();
    await this.storage.removeItem(authStateKey);
  }
}
