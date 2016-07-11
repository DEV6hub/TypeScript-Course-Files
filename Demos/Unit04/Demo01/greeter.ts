class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet(): string {
    return this.greeting;
  }
}

const greeter: Greeter = new Greeter('Hello World!');

let cont: any = document.getElementById('cont');
cont.innerHTML = (greeter.greet());
