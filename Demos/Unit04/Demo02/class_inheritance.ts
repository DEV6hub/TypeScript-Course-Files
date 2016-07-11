// Polygon
class Polygon {
  name: string;
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  sayName(): void {
    console.log(`Hi, I am a ${this.name}.`);
  }

  sayHistory(): void {
    console.log(`"Polygon" is derived from the Greek polus (many)
      and gonia (angle).`);
  }

}

let p: any = new Polygon(300, 400);
p.sayName();
console.log(`The width of this polygon is ${p.width}`);

// Square
class Square extends Polygon {
  constructor(length: any) {
    super(length, length);
    this.name = 'Square';
  }

  get area(): number {
    return this.height * this.width;
  }

  set area(value: number) {
    this.height = Math.sqrt(value);
    this.width = Math.sqrt(value);
  }
}

let s: Square = new Square(5);

s.sayName();
console.log(`The area of this square is ${s.area}`);

s.area = 100;
console.log(`The height of this square is ${s.height}`);

// Rectangle
class Rectangle extends Polygon {
  constructor(height: number, width: number) {
    super(height, width);
    this.name = 'Rectangle';
  }

  sayName(): void {
    console.log('Sup! My name is ', this.name + '.');
    super.sayHistory();
  }
}

let r: Rectangle = new Rectangle(50, 60);
r.sayName();
