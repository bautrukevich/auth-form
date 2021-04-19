import * as RestoreToken from "../../../auth/useCase/restoreToken";

import { SECURE_AUTH_STATE_KEY, SECRET_TOKEN } from "../../../../infrastructure/data";
import { FakeAuth } from "../../../../infrastructure/FakeAuth";
import { CookiesSecureStorage } from "../../../../infrastructure/CookiesSecureStorage";

import { AuthStateKey } from "../../../../domain/auth/AuthStateKey";
import { AccessToken } from "../../../../domain/auth/AccessToken";

describe("restoreToken", () => {
  it("should be able to restore access token", async () => {
    const auth = new FakeAuth();

    const defaults = { expires: CookiesSecureStorage.EXPIRES_IN_1_HOUR, secure: false };
    const storage = new CookiesSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString, defaults);

    const query = RestoreToken.Query.create({ authStateKey: SECURE_AUTH_STATE_KEY });
    const handler = new RestoreToken.Handler({ auth, storage });

    const accessToken = AccessToken.fromString(SECRET_TOKEN);

    await expect(handler.handle(query)).resolves.toBeNull();

    await storage.setItem(query.authStateKey, accessToken);

    await expect(handler.handle(query)).resolves.toStrictEqual(accessToken);
  });
});
