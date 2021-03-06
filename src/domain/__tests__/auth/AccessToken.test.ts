import { AccessToken, AccessTokenIsEmpty } from "../../auth/AccessToken";

describe("AccessToken", () => {
  it("should throw an error when access token is empty string", () => {
    expect(() => {
      AccessToken.fromString(" ");
    }).toThrowError(AccessTokenIsEmpty);
  });
  it("should have the access token trimmed", () => {
    const accessToken = AccessToken.fromString(" secure_token ");

    expect(accessToken.asString()).toBe("secure_token");
  });
  it("should be equal to other access token", () => {
    const accessToken = AccessToken.fromString("secure_token");
    const otherAccessToken = AccessToken.fromString("secure_token");

    expect(accessToken.isEqualTo(otherAccessToken)).toBeTruthy();
  });
});
