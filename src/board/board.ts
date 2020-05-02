import { Cell } from "../Cell/cell";

export class Board {
  private _surface: Cell[][];
  constructor() {
    this._surface = Array.from(new Array(5)).map(() =>
      Array.from(new Array(5)).map(() => new Cell())
    );
  }

  getSurface() {
    return this._surface;
  }
}
