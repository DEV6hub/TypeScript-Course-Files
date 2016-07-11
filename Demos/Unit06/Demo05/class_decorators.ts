// Class Decorator
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): void {
    console.log(`Hello, ${this.greeting}`);
  }
}

function sealed(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

let greeter: Greeter = new Greeter('world');
console.log(greeter);
