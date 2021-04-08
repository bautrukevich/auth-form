import { CookiesSecureStorage } from "../CookiesSecureStorage";
import { AccessToken } from "../../domain/auth/AccessToken";
import { AuthStateKey } from "../../domain/auth/AuthStateKey";

describe("CookiesSecureStorage", () => {
  it("should be able to save item to storage", async () => {
    const authStateKey = AuthStateKey.fromString("access_token");
    const accessToken = AccessToken.fromString("secret_token");
    const storage = new CookiesSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

    await expect(storage.setItem(authStateKey, accessToken)).resolves.not.toThrow();
  });
  it("should be able to get item from storage", async () => {
    const authStateKey = AuthStateKey.fromString("access_token");
    const accessToken = AccessToken.fromString("secret_token");
    const storage = new CookiesSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

    await expect(storage.setItem(authStateKey, accessToken)).resolves.not.toThrow();
    await expect(storage.getItem(authStateKey)).resolves.not.toBeNull();
    await expect(storage.getItem(authStateKey)).resolves.toStrictEqual(accessToken);
  });
  it("should be able to remove item from storage", async () => {
    const authStateKey = AuthStateKey.fromString("access_token");
    const accessToken = AccessToken.fromString("secret_token");
    const storage = new CookiesSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

    await expect(storage.setItem(authStateKey, accessToken)).resolves.not.toThrow();
    await expect(storage.removeItem(authStateKey)).resolves.not.toThrow();
    await expect(storage.getItem(authStateKey)).resolves.toBeNull();
  });
});
