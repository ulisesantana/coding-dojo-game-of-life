import EventEmitter from "events";
export class Cell {
  private _event: EventEmitter;
  private _neighboursAlive: number;

  constructor(private _alive: boolean = true, private _position: string = "") {
    this._neighboursAlive = 0;
    this._event = new EventEmitter();
    this.addListeners();
  }

  addListeners() {
    // Se calculan las posiciones de los vecinos basandonos en la nuestra
    // Se añade un listener por cada uno de los vecinos
  }

  isAlive() {
    return this._alive;
  }

  generateNextGeneration() {
    this._event.emit(this._position, !this._alive); // sólo si cambia de estado
  }

  listenerHandler(neighbourIsAlive: boolean) {
    if (neighbourIsAlive) {
      this._neighboursAlive = this._neighboursAlive + 1;
    } else {
      this._neighboursAlive = this._neighboursAlive - 1;
    }
  }
}
