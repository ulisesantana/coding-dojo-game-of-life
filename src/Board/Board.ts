type Position = {
	x: number;
	y: number;
};

export class Cell {
	constructor(
		private readonly positionX: number,
		private readonly positionY: number
	) {}

	getPosition(): Position {
		return {
			x: this.positionX,
			y: this.positionY
		};
	}
}
