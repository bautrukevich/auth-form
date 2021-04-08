import { FullName, FullNameIsEmpty } from "../../user/FullName";

describe("FullName", () => {
  it("should throw an error when full name is empty string", () => {
    expect(() => {
      FullName.fromString(" ");
    }).toThrowError(FullNameIsEmpty);
  });
  it("should have the full name trimmed", () => {
    const fullName = FullName.fromString(" John Doe ");

    expect(fullName.asString()).toBe("John Doe");
  });
});
