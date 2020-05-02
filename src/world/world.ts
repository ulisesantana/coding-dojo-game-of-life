import { Cell } from "../cell/cell";

export class World {
  private board: Cell[][];

  constructor(private _width: number = 5, private _height: number = 5) {
    this.board = Array.from(new Array(this._width)).map(() =>
      Array.from(new Array(this._height))
    );
  }

  getBoard() {
    return this.board;
  }
}
