// Default Function Parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}
console.log('The answer is ', multiply(5));

// Another Example
let someDiv: HTMLElement = document.getElementById('featureDiv');

function setBackgroundColor(element: HTMLElement, color: string = 'rosybrown'): void {
  element.style.backgroundColor = color;
  element.style.height = '500px';
  element.style.width = '500px';
}

setBackgroundColor(someDiv);
setBackgroundColor(someDiv, undefined);
setBackgroundColor(someDiv, 'blue');

// One More
function callSomething(thing: any = something()): any {
  return thing;
}

function something(): string {
  return 'SOMETHING HERE IS SAID';
}

alert(callSomething());
