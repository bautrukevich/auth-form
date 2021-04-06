export class FullNameIsEmptyError extends Error {
  constructor() {
    super("Full name must be not empty string.");
    this.name = "FullNameIsEmptyError";

    Object.setPrototypeOf(this, FullNameIsEmptyError.prototype);
  }
}

export class FullName {
  private readonly fullName: string;

  private constructor(fullName: string) {
    const fullNameTrimmed = fullName.trim();

    if (fullNameTrimmed === "") {
      throw new FullNameIsEmptyError();
    }

    this.fullName = fullNameTrimmed;
  }

  static fromString(fullName: string): FullName {
    return new FullName(fullName);
  }

  asString(): string {
    return this.fullName;
  }
}
