export class PasswordIsEmpty extends Error {
  constructor() {
    super("Password must be not empty string.");
    this.name = "PasswordIsEmpty";

    Object.setPrototypeOf(this, PasswordIsEmpty.prototype);
  }
}

export class Password {
  private readonly password: string;

  private constructor(password: string) {
    const passwordTrimmed = password.trim();

    if (passwordTrimmed === "") {
      throw new PasswordIsEmpty();
    }

    this.password = passwordTrimmed;
  }

  static fromString(password: string): Password {
    return new Password(password);
  }

  asString(): string {
    return this.password;
  }
}
