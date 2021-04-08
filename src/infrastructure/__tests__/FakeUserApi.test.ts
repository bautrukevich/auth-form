import { FakeUserApi, UserApiInvalidToken } from "../FakeUserApi";
import { AccessToken } from "../../domain/auth/AccessToken";
import { User } from "../../domain/user/User";
import { FullName } from "../../domain/user/FullName";

describe("FakeUserApi", () => {
  it("should be able to get user info with valid token", async () => {
    const accessToken = AccessToken.fromString("secret_token");
    const userApi = new FakeUserApi(accessToken);
    const user = User.fromJson({
      id: "unique_id",
      fullName: "John Doe",
    });

    await expect(userApi.getUserInfo()).resolves.toStrictEqual(user);
  });
  it("should not be able to get user info with invalid token", async () => {
    const accessToken = AccessToken.fromString("invalid_token");
    const userApi = new FakeUserApi(accessToken);

    await expect(userApi.getUserInfo()).rejects.toThrow(UserApiInvalidToken);
  });
  it("should be able to update user info with valid token", async () => {
    const accessToken = AccessToken.fromString("secret_token");
    const userApi = new FakeUserApi(accessToken);

    await expect(userApi.updateUserInfo(FullName.fromString("Jane Doe"))).resolves.not.toThrow();
  });
  it("should not be able to update user info  with invalid token", async () => {
    const accessToken = AccessToken.fromString("invalid_token");
    const userApi = new FakeUserApi(accessToken);

    await expect(userApi.updateUserInfo(FullName.fromString("Jane Doe"))).rejects.toThrow(UserApiInvalidToken);
  });
});
