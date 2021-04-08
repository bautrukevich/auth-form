import { User } from "../../domain/user/User";
import { FullName } from "../../domain/user/FullName";

export interface UserApi {
  getUserInfo(): Promise<User>;
  updateUserInfo(fullName: FullName): Promise<void>;
}
