import { Cell } from "./cell";

describe("Cell should", () => {
  it("be alive by default", () => {
    const cell = new Cell();

    expect(cell.isAlive()).toBe(true);
  });

  it("kill itself if there is underpopulation", () => {
    const cell = new Cell();
    const underpopulation = 1;

    cell.calculateNextGenerationBasedOnNeighbours(underpopulation);

    expect(cell.isAlive()).toBe(false);
  });

  it("kill itself if there is overcrowding", () => {
    const cell = new Cell();
    const overcrowding = 4;

    cell.calculateNextGenerationBasedOnNeighbours(overcrowding);

    expect(cell.isAlive()).toBe(false);
  });
});
