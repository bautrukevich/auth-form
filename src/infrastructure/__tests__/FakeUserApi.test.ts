import { FakeUserApi, UserApiInvalidToken } from "../FakeUserApi";
import { AccessToken } from "../../domain/auth/AccessToken";
import { FullName } from "../../domain/user/FullName";
import { INVALID_SECRET_TOKEN, NEW_FULL_NAME, SECRET_TOKEN, userFactory } from "../data";

describe("FakeUserApi", () => {
  it("should be able to get user info with valid token", async () => {
    const accessToken = AccessToken.fromString(SECRET_TOKEN);
    const userApi = new FakeUserApi(accessToken);
    const user = userFactory();

    await expect(userApi.getUserInfo()).resolves.toStrictEqual(user);
  });
  it("should not be able to get user info with invalid token", async () => {
    const accessToken = AccessToken.fromString(INVALID_SECRET_TOKEN);
    const userApi = new FakeUserApi(accessToken);

    await expect(userApi.getUserInfo()).rejects.toThrow(UserApiInvalidToken);
  });
  it("should be able to update user info with valid token", async () => {
    const accessToken = AccessToken.fromString(SECRET_TOKEN);
    const userApi = new FakeUserApi(accessToken);

    await expect(userApi.updateUserInfo(FullName.fromString(NEW_FULL_NAME))).resolves.not.toThrow();
  });
  it("should not be able to update user info  with invalid token", async () => {
    const accessToken = AccessToken.fromString(INVALID_SECRET_TOKEN);
    const userApi = new FakeUserApi(accessToken);

    await expect(userApi.updateUserInfo(FullName.fromString(NEW_FULL_NAME))).rejects.toThrow(UserApiInvalidToken);
  });
});
