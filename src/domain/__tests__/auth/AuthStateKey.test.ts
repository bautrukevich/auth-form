import { AuthStateKey, AuthStateKeyIsEmpty } from "../../auth/AuthStateKey";

describe("AuthStateKey", () => {
  it("should throw an error when auth state key is empty string", () => {
    expect(() => {
      AuthStateKey.fromString(" ");
    }).toThrowError(AuthStateKeyIsEmpty);
  });
  it("should have the auth state key trimmed", () => {
    const authStateKey = AuthStateKey.fromString(" access_token ");

    expect(authStateKey.asString()).toBe("access_token");
  });
});
