export class Cell {
  constructor(
    private _position: Coordinate = generateCoordinate(0, 0),
    private _alive: boolean = true
  ) {}

  isAlive() {
    return this._alive;
  }

  getPosition(): Coordinate {
    return this._position;
  }
}

interface Coordinate {
  x: number;
  y: number;
}

export function generateCoordinate(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}
