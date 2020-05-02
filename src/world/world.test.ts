import { World } from "./world";
// import { Cell } from "../cell/cell";

describe("World should", () => {
  it("create a board with a default grid", () => {
    const world = new World();
    const defaultHeight = 5;
    const defaultWidth = 5;

    const boardWidth = world.getBoard().length;
    const firstRow = world.getBoard()[0].length;

    expect(boardWidth === defaultHeight).toBe(true);
    expect(firstRow === defaultWidth).toBe(true);
  });

  xit("return the adjacent positions", () => {
    // const position = new Position(1, 1);
    // expect(position.getPosition()).toStrictEqual([
    //   "0,0",
    //   "0,1",
    //   "0,2",
    //   "1,0",
    //   "1,2",
    //   "2,0",
    //   "2,1",
    //   "2,2",
    // ]);
  });
});
