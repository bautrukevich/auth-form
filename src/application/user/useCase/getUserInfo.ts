import { UserApi } from "../UserApi";
import { AccessToken } from "../../../domain/auth/AccessToken";
import { User } from "../../../domain/user/User";

export class Query {
  private readonly _accessToken: string;

  private constructor({ accessToken }: { accessToken: string }) {
    this._accessToken = accessToken;
  }

  static create({ accessToken }: { accessToken: string }): Query {
    return new Query({ accessToken });
  }

  get accessToken(): AccessToken {
    return AccessToken.fromString(this._accessToken);
  }
}

export class Handler {
  private readonly userApi: UserApi;

  constructor({ userApi }: { userApi: UserApi }) {
    this.userApi = userApi;
  }

  async handle(): Promise<User> {
    return this.userApi.getUserInfo();
  }
}
