import { User } from "../domain/user/User";
import { FullName } from "../domain/user/FullName";
import { AccessToken } from "../domain/auth/AccessToken";
import { UserApi } from "../application/user/UserApi";

export class UserApiInvalidToken extends Error {
  constructor() {
    super("Invalid token.");
    this.name = "UserApiInvalidToken";

    Object.setPrototypeOf(this, UserApiInvalidToken.prototype);
  }
}

export class FakeUserApi implements UserApi {
  private static readonly SECRET_TOKEN = AccessToken.fromString("secret_token");

  private _token: AccessToken;

  constructor(token: AccessToken) {
    this._token = token;
  }

  getUserInfo(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      if (this._token.isEqualTo(FakeUserApi.SECRET_TOKEN)) {
        const user = User.fromJson({
          id: "unique_id",
          fullName: "John Doe",
        });

        resolve(user);
      } else {
        reject(new UserApiInvalidToken());
      }
    });
  }

  updateUserInfo(fullName: FullName): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this._token.isEqualTo(FakeUserApi.SECRET_TOKEN)) {
        resolve();
      } else {
        reject(new UserApiInvalidToken());
      }
    });
  }
}
