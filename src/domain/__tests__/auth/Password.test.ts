import { Password, PasswordIsEmpty } from "../../auth/Password";

describe("Password", () => {
  it("should throw an error when password is empty string", () => {
    expect(() => {
      Password.fromString(" ");
    }).toThrowError(PasswordIsEmpty);
  });
  it("should have the password trimmed", () => {
    const password = Password.fromString(" $ecure_pa$$word ");

    expect(password.asString()).toBe("$ecure_pa$$word");
  });
  it("should be equal to other password", () => {
    const password = Password.fromString("$ecure_pa$$word");
    const otherPassword = Password.fromString("$ecure_pa$$word");

    expect(password.isEqualTo(otherPassword)).toBeTruthy();
  });
});
