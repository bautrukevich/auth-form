import { UserId, UserIdIsEmptyError } from "../../user/UserId";

describe("UserId", () => {
  it("should throw an error when user id is empty string", () => {
    expect(() => {
      UserId.fromString(" ");
    }).toThrowError(UserIdIsEmptyError);
  });
  it("should have the id trimmed", () => {
    const userId = UserId.fromString(" unique_id ");

    expect(userId.asString()).toBe("unique_id");
  });
});
