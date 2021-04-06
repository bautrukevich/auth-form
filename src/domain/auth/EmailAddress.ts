export class EmailAddressIsEmpty extends Error {
  constructor() {
    super("Email address must be not empty string.");
    this.name = "EmailAddressIsEmpty";

    Object.setPrototypeOf(this, EmailAddressIsEmpty.prototype);
  }
}

export class EmailAddressIsInvalid extends Error {
  constructor(emailAddress: string) {
    super(`Email address ${emailAddress} is invalid.`);
    this.name = "EmailAddressIsInvalid";

    Object.setPrototypeOf(this, EmailAddressIsInvalid.prototype);
  }
}

export class EmailAddress {
  private readonly emailAddress: string;

  private constructor(emailAddress: string) {
    const emailAddressTrimmed = emailAddress.trim();

    if (emailAddressTrimmed === "") {
      throw new EmailAddressIsEmpty();
    }

    this.emailAddress = emailAddressTrimmed;
  }

  static fromString(emailAddress: string): EmailAddress {
    return new EmailAddress(emailAddress);
  }

  asString(): string {
    return this.emailAddress;
  }
}
