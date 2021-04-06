export class AuthStateKeyIsEmpty extends Error {
  constructor() {
    super("Auth state key must be not empty string.");
    this.name = "AuthStateKeyIsEmpty";

    Object.setPrototypeOf(this, AuthStateKeyIsEmpty.prototype);
  }
}

export class AuthStateKey {
  private readonly key: string;

  private constructor(key: string) {
    const keyTrimmed = key.trim();

    if (keyTrimmed === "") {
      throw new AuthStateKeyIsEmpty();
    }

    this.key = keyTrimmed;
  }

  static fromString(key: string): AuthStateKey {
    return new AuthStateKey(key);
  }

  asString(): string {
    return this.key;
  }
}
