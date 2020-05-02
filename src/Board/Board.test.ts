import {Cell} from './Cell';

describe('Cell should', () => {
	it('retrieve the position given', () => {
		const cell = new Cell(1, 1);

		expect(cell.getPosition()).toStrictEqual({x: 1, y: 1});
	});
});
