import { EmailAddress, EmailAddressIsEmpty } from "../../auth/EmailAddress";

describe("EmailAddress", () => {
  it("should throw an error when email address is empty string", () => {
    expect(() => {
      EmailAddress.fromString(" ");
    }).toThrowError(EmailAddressIsEmpty);
  });
  it("should have the email address trimmed", () => {
    const emailAddress = EmailAddress.fromString(" e@mail.tld ");

    expect(emailAddress.asString()).toBe("e@mail.tld");
  });
});
