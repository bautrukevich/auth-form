export class FullNameIsEmpty extends Error {
  constructor() {
    super("Full name must be not empty string.");
    this.name = "FullNameIsEmpty";

    Object.setPrototypeOf(this, FullNameIsEmpty.prototype);
  }
}

export class FullName {
  private readonly fullName: string;

  private constructor(fullName: string) {
    const fullNameTrimmed = fullName.trim();

    if (fullNameTrimmed === "") {
      throw new FullNameIsEmpty();
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
