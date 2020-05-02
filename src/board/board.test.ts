import { Board } from "./board";
import { Cell } from "../Cell/cell";

describe("Board should", () => {
  it("be created with full of alive cells in a grid of 5x5", () => {
    const board = new Board();
    expect(board.getSurface()).toStrictEqual([
      [new Cell(), new Cell(), new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell(), new Cell(), new Cell()],
    ]);
  });
});
