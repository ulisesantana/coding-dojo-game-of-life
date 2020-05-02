export class Cell {
  constructor(private _alive: boolean = true) {}

  isAlive() {
    return this._alive;
  }
}
