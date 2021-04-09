import { UserId } from "./UserId";
import { FullName } from "./FullName";
import { EmailAddress } from "../auth/EmailAddress";

type UserProps = { id: string; emailAddress: string; fullName: string };

export class User {
  private readonly _id: UserId;
  private readonly _emailAddress: EmailAddress;
  private readonly _fullName: FullName;

  private constructor({ id, emailAddress, fullName }: UserProps) {
    this._id = UserId.fromString(id);
    this._emailAddress = EmailAddress.fromString(emailAddress);
    this._fullName = FullName.fromString(fullName);
  }

  static fromJson({ id, emailAddress, fullName }: UserProps): User {
    return new User({ id, emailAddress, fullName });
  }

  get id(): string {
    return this._id.asString();
  }

  get fullName(): string {
    return this._fullName.asString();
  }

  get emailAddress(): string {
    return this._emailAddress.asString();
  }
}
