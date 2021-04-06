export class UserIdIsEmptyError extends Error {
  constructor() {
    super("User id must be not empty string.");
    this.name = "UserIdIsEmptyError";

    Object.setPrototypeOf(this, UserIdIsEmptyError.prototype);
  }
}

export class UserId {
  private readonly id: string;

  private constructor(id: string) {
    const idTrimmed = id.trim();

    if (idTrimmed === "") {
      throw new UserIdIsEmptyError();
    }
    this.id = idTrimmed;
  }

  static fromString(id: string): UserId {
    return new UserId(id);
  }

  asString(): string {
    return this.id;
  }
}
