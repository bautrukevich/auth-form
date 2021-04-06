import { FullName, FullNameIsEmptyError } from "../../user/FullName";

describe("FullName", () => {
  it("should throw an error when full name is empty string", () => {
    expect(() => {
      FullName.fromString(" ");
    }).toThrowError(FullNameIsEmptyError);
  });
  it("should have the full name trimmed", () => {
    const fullName = FullName.fromString(" John Doe ");

    expect(fullName.asString()).toBe("John Doe");
  });
});
