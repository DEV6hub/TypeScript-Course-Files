// Rest Parameter
// Example 1
console.log('<--- Rest Parameter: Example 1 --->');
function argCounter(...args: any[]): void {
  console.log(args.length);
}

argCounter();
argCounter(5);
argCounter(5, 6, 7);

// Example 2
console.log('<--- Rest Parameter: Example 2 --->');
function multiply(multiplier: number, ...args: number[]): number[] {
  return args.map((element: number) => multiplier * element);
}

let arr: number[] = multiply(2, 1, 2, 3);
console.log(arr);

// Spread Operator
console.log('<----- Spread Operator ----->');
let parts: string[] = ['shoulders', 'knees'];
let lyrics: string[] = ['head', ...parts, 'toes'];
console.log(lyrics);
