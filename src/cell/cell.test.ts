import { Cell } from "./cell";

xdescribe("Cell should", () => {
  it("be alive by default", () => {
    const cell = new Cell();
    expect(cell.isAlive()).toBe(true);
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
