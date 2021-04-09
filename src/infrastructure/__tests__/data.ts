import { User } from "../../domain/user/User";

export const SECURE_AUTH_STATE_KEY = "access_token";

export const SECRET_TOKEN = "secret_token";
export const INVALID_SECRET_TOKEN = "invalid_token";

export const SECRET_EMAIL = "valid@email.com";
export const SECRET_PASSWORD = "secret_password";

export const INVALID_EMAIL = "any@email.com";
export const INVALID_PASSWORD = "any_password";

export const NEW_FULL_NAME = "Jane Doe";

export const userFactory = () =>
  User.fromJson({
    id: "unique_id",
    emailAddress: "valid@email.com",
    fullName: "John Doe",
  });
