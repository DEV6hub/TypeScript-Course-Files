function greeter(greeting: string): string {
  'use strict';
  return 'Hello, ' + greeting;
}

var x: string = 'World!';

var cont: HTMLElement = document.getElementById('cont');

cont.innerHTML = (greeter(x));
