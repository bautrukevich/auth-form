import { User } from "../../user/User";

describe("User", () => {
  it("should create user from plain object (id and full name)", () => {
    const user = User.fromJson({ id: " unique_id ", emailAddress: " valid@email.com ", fullName: " John Doe " });

    expect(user.id).toBe("unique_id");
    expect(user.fullName).toBe("John Doe");
  });
});
