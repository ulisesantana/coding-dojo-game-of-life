export class Cell {
  constructor(private _alive: boolean = true) {}

  isAlive() {
    return this._alive;
  }

  calculateNextGenerationBasedOnNeighbours(neighbours: number) {
    if (this.isGoingToDie(neighbours)) {
      this._alive = false;
    }
  }

  private isUnderpopulation(neighbours: number) {
    return neighbours < 2;
  }

  private isOvercrowding(neighbours: number) {
    return neighbours > 3;
  }

  private isGoingToDie(neighbours: number) {
    return (
      this.isUnderpopulation(neighbours) || this.isOvercrowding(neighbours)
    );
  }
}
