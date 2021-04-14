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
  private static REG_EXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private readonly emailAddress: string;

  private constructor(emailAddress: string) {
    const emailAddressTrimmed = emailAddress.trim();

    if (emailAddressTrimmed === "") {
      throw new EmailAddressIsEmpty();
    }

    if (!EmailAddress.REG_EXP.test(emailAddressTrimmed)) {
      throw new EmailAddressIsInvalid(emailAddress);
    }

    this.emailAddress = emailAddressTrimmed;
  }

  static fromString(emailAddress: string): EmailAddress {
    return new EmailAddress(emailAddress);
  }

  isEqualTo(other: EmailAddress) {
    return this.emailAddress === other.emailAddress;
  }

  asString(): string {
    return this.emailAddress;
  }
}
