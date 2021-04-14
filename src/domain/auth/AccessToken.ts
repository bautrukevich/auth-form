import { Storable } from "../../application/SecureStorage";

export class AccessTokenIsEmpty extends Error {
  constructor() {
    super("Access token must be not empty string.");
    this.name = "AccessTokenIsEmpty";

    Object.setPrototypeOf(this, AccessTokenIsEmpty.prototype);
  }
}

export class AccessToken implements Storable {
  private readonly accessToken: string;

  private constructor(accessToken: string) {
    const accessTokenTrimmed = accessToken.trim();

    if (accessTokenTrimmed === "") {
      throw new AccessTokenIsEmpty();
    }
    this.accessToken = accessTokenTrimmed;
  }

  static fromString(accessToken: string): AccessToken {
    return new AccessToken(accessToken);
  }

  isEqualTo(other: AccessToken) {
    return this.accessToken === other.accessToken;
  }

  asString(): string {
    return this.accessToken;
  }
}
