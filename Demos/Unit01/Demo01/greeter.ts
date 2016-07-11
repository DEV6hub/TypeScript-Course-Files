function greeter(greeting) {
  'use strict';
  return 'Hello, ' + greeting;
}

var x = 'World!';

var cont = document.getElementById('cont');

cont.innerHTML = (greeter(x));
