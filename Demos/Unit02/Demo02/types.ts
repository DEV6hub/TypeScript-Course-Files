// Named Function
function warnUser(): void {
  'use strict';
  alert('This is my warning message');
}

warnUser();

// Anonymous Function
var square: (a: number) => number = function(a: number): number {
  return a * a;
};

console.log(square(4));

// Arrow Functions
var a: string[] = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(a);

var a2: number[] = a.map(function(s: string): number {
  return s.length;
});
console.log('a2:', a2);

var a3: number[] = a.map((s: string) => s.length);
console.log('a3:', a3);
