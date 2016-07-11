class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet(): void {
    console.log(`Hello, ${this.greeting}`);
  }
}

function enumerable(value: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    descriptor.enumerable = value;
  };
}

let x: Greeter = new Greeter(`world`);
console.log(x);
