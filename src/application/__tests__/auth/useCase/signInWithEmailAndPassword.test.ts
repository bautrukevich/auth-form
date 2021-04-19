import * as SignInWithEmailAndPassword from "../../../auth/useCase/signInWithEmailAndPassword";

import { SECURE_AUTH_STATE_KEY, SECRET_EMAIL, SECRET_PASSWORD, SECRET_TOKEN } from "../../../../infrastructure/data";
import { FakeAuth } from "../../../../infrastructure/FakeAuth";
import { CookiesSecureStorage } from "../../../../infrastructure/CookiesSecureStorage";

import { AuthStateKey } from "../../../../domain/auth/AuthStateKey";
import { AccessToken } from "../../../../domain/auth/AccessToken";

describe("signInWithEmailAndPassword", () => {
  it("should be able to sign in with email and password", async () => {
    const auth = new FakeAuth();
    const storage = new CookiesSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

    const query = SignInWithEmailAndPassword.Query.create({
      email: SECRET_EMAIL,
      password: SECRET_PASSWORD,
      authStateKey: SECURE_AUTH_STATE_KEY,
    });
    const handler = new SignInWithEmailAndPassword.Handler({ auth, storage });
    const accessToken = AccessToken.fromString(SECRET_TOKEN);

    await expect(handler.handle(query)).resolves.toStrictEqual(accessToken);
  });
});
