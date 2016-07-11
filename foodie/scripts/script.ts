function greeter(greeting: string): string {
  return 'Hello, ' + greeting;
}

var x: string = 'World';

var list: HTMLElement = document.getElementById('list');

list.innerHTML = (greeter(x));
