import * as SignOut from "../../../auth/useCase/signOut";

import { SECURE_AUTH_STATE_KEY } from "../../../../infrastructure/data";
import { FakeAuth } from "../../../../infrastructure/FakeAuth";
import { CookiesSecureStorage } from "../../../../infrastructure/CookiesSecureStorage";

import { AuthStateKey } from "../../../../domain/auth/AuthStateKey";
import { AccessToken } from "../../../../domain/auth/AccessToken";

describe("signOut", () => {
  it("should be able to sign out", async () => {
    const auth = new FakeAuth();
    const storage = new CookiesSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

    const command = SignOut.Command.create({ authStateKey: SECURE_AUTH_STATE_KEY });
    const handler = new SignOut.Handler({ auth, storage });

    await expect(handler.handle(command)).resolves.not.toThrow();
  });
});
