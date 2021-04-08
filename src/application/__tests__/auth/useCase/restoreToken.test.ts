import * as RestoreToken from "../../../auth/useCase/restoreToken";
import { SECURE_AUTH_STATE_KEY } from "../../../../infrastructure/contexts/AuthStateContext";
import { FakeAuth } from "../../../../infrastructure/FakeAuth";
import { CookiesSecureStorage } from "../../../../infrastructure/CookiesSecureStorage";
import { AuthStateKey } from "../../../../domain/auth/AuthStateKey";
import { AccessToken } from "../../../../domain/auth/AccessToken";
import { SECRET_TOKEN } from "../../../../infrastructure/__tests__/data";

describe("restoreToken", () => {
  it("should be able to restore access token", async () => {
    const auth = new FakeAuth();
    const storage = new CookiesSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);
    const query = RestoreToken.Query.create({ authStateKey: SECURE_AUTH_STATE_KEY });
    const handler = new RestoreToken.Handler({ auth, storage });

    const accessToken = AccessToken.fromString(SECRET_TOKEN);

    await expect(handler.handle(query)).resolves.toBeNull();

    await storage.setItem(query.authStateKey, accessToken);

    await expect(handler.handle(query)).resolves.toStrictEqual(accessToken);
  });
});
