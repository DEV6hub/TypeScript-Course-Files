const lion: symbol = Symbol('lion');
const tiger: symbol = Symbol('tiger');
const bear: symbol = Symbol('bear');


let animals = {
  [lion]: 'lion',
  [tiger]: 'tiger',
  [bear]: 'bear'
};

console.log(animals[lion]);
console.log(animals[Symbol('lion')]); // undefined
console.log(animals[tiger]);
console.log(animals[bear]);
