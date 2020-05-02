export class Position {
  constructor(private _x: number, private _y: number) {}

  getPosition() {
    return `${this._x},${this._y}`;
  }
}
