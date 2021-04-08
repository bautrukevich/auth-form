export class UserIdIsEmpty extends Error {
  constructor() {
    super("User id must be not empty string.");
    this.name = "UserIdIsEmpty";

    Object.setPrototypeOf(this, UserIdIsEmpty.prototype);
  }
}

export class UserId {
  private readonly id: string;

  private constructor(id: string) {
    const idTrimmed = id.trim();

    if (idTrimmed === "") {
      throw new UserIdIsEmpty();
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
