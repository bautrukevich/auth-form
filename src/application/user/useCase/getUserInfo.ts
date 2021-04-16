import { UserApi } from "../UserApi";
import { User } from "../../../domain/user/User";

export class Handler {
  private readonly userApi: UserApi;

  constructor({ userApi }: { userApi: UserApi }) {
    this.userApi = userApi;
  }

  async handle(): Promise<User> {
    return this.userApi.getUserInfo();
  }
}
