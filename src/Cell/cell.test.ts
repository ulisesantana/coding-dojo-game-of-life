import { Cell } from "./cell";

describe("Cell should", () => {
  it("be created alive by default", () => {
    const cell = new Cell();
    expect(cell.isAlive()).toBe(true);
  });
});
