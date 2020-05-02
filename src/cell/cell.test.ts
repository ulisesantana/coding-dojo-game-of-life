import { Cell, generateCoordinate } from "./cell";

describe("Cell should", () => {
  it("be alive by default", () => {
    const cell = new Cell();
    expect(cell.isAlive()).toBe(true);
  });

  it("know its own position", () => {
    const cell = new Cell(generateCoordinate(1, 1));
    expect(cell.getPosition()).toStrictEqual({ x: 1, y: 1 });
  });

  xit("know the number of beside neighbours", () => {
    expect(false).toBe(true);
  });

  xit("kill itself if there is underpopulation", () => {
    expect(true).toBe(true);
  });

  xit("kill itself if there is overcrowding", () => {
    expect(true).toBe(true);
  });
});
