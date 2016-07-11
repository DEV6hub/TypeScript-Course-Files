class Grid {
  static origin: { x: number, y: number } = { x: 0, y: 0 };

  constructor(public scale: number) { }

  calculateDistanceFromOrigin(point: { x: number, y: number }): number {
    let xDist: number = (point.x - Grid.origin.x);
    let yDist: number = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}

let element1: HTMLElement = document.getElementById('grid1');
let element2: HTMLElement = document.getElementById('grid2');

let grid1: Grid = new Grid(1.0);  // 1x scale
let grid2: Grid = new Grid(5.0);  // 5x scale

element1.innerHTML = `Grid 1: ${grid1.calculateDistanceFromOrigin({ x: 10, y: 10 })}`;
element2.innerHTML = `Grid 2: ${grid2.calculateDistanceFromOrigin({ x: 10, y: 10 })}`;

console.log(`Grid 1: ${grid1.calculateDistanceFromOrigin({ x: 10, y: 10 })}`);
console.log(`Grid 2: ${grid2.calculateDistanceFromOrigin({ x: 10, y: 10 })}`);
