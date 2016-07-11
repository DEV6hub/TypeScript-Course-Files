// Multi-line String
console.log(`string text line 1
  string text line 2`);

// Template String
let a: number = 30;
let b: number = 50;
console.log(`Eighty is ${a + b} and not ${2 * a}.`);

// Destructuring

const john: { first: string, last: string, gender: string } = {
  first: 'John',
  last: 'Smith',
  gender: 'male'
};

const {first, last} = john;

console.log(`Hello ${first} ${last}`);
