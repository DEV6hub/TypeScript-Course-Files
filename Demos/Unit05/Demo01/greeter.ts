interface Greeting {
  parameter: string;
}

function greeter(greeting: Greeting): string {
  return `Hello, ${greeting.parameter}`;
}

let x: Greeting = {parameter: 'World'};

let cont: HTMLElement = document.getElementById('cont');
cont.innerHTML = (greeter(x));
