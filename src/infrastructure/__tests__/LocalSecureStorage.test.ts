import { LocalSecureStorage } from "../LocalSecureStorage";
import { AccessToken } from "../../domain/auth/AccessToken";
import { AuthStateKey } from "../../domain/auth/AuthStateKey";
import { SECRET_TOKEN, SECURE_AUTH_STATE_KEY } from "../data";

describe("LocalSecureStorage", () => {
  it("should be able to save item to storage", async () => {
    const authStateKey = AuthStateKey.fromString(SECURE_AUTH_STATE_KEY);
    const accessToken = AccessToken.fromString(SECRET_TOKEN);
    const storage = new LocalSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

    await expect(storage.setItem(authStateKey, accessToken)).resolves.not.toThrow();
  });
  it("should be able to get item from storage", async () => {
    const authStateKey = AuthStateKey.fromString(SECURE_AUTH_STATE_KEY);
    const accessToken = AccessToken.fromString(SECRET_TOKEN);
    const storage = new LocalSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

    await expect(storage.setItem(authStateKey, accessToken)).resolves.not.toThrow();
    await expect(storage.getItem(authStateKey)).resolves.not.toBeNull();
    await expect(storage.getItem(authStateKey)).resolves.toStrictEqual(accessToken);
  });
  it("should be able to remove item from storage", async () => {
    const authStateKey = AuthStateKey.fromString(SECURE_AUTH_STATE_KEY);
    const accessToken = AccessToken.fromString(SECRET_TOKEN);
    const storage = new LocalSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

    await expect(storage.setItem(authStateKey, accessToken)).resolves.not.toThrow();
    await expect(storage.removeItem(authStateKey)).resolves.not.toThrow();
    await expect(storage.getItem(authStateKey)).resolves.toBeNull();
  });
});
