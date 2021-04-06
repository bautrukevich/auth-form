import { UserId } from "./UserId";
import { FullName } from "./FullName";

type UserProps = { id: string; fullName: string };

export class User {
  private readonly _id: UserId;
  private readonly _fullName: FullName;

  private constructor({ id, fullName }: UserProps) {
    this._id = UserId.fromString(id);
    this._fullName = FullName.fromString(fullName);
  }

  static fromJson({ id, fullName }: UserProps): User {
    return new User({ id, fullName });
  }

  get id(): string {
    return this._id.asString();
  }

  get fullName(): string {
    return this._fullName.asString();
  }
}
