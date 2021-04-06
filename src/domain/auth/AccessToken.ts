export class AccessTokenIsEmptyError extends Error {
  constructor() {
    super("Access token must be not empty string.");
    this.name = "AccessTokenIsEmptyError";

    Object.setPrototypeOf(this, AccessTokenIsEmptyError.prototype);
  }
}

export class AccessToken {
  private readonly accessToken: string;

  private constructor(accessToken: string) {
    const accessTokenTrimmed = accessToken.trim();

    if (accessTokenTrimmed === "") {
      throw new AccessTokenIsEmptyError();
    }
    this.accessToken = accessTokenTrimmed;
  }

  static fromString(accessToken: string): AccessToken {
    return new AccessToken(accessToken);
  }

  asString(): string {
    return this.accessToken;
  }
}
