import { Position } from "./position";

describe("Position should", () => {
  it("return the position by the given coordinates", () => {
    const position = new Position(1, 1);
    expect(position.getPosition()).toBe("1,1");
  });
});
