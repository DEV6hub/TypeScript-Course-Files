// Type Aliases

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): void {
  if (typeof n === 'string') {
    console.log('Type Aliases - This is a string:', n);
  } else {
    alert(`Type Aliases - This is something else: ${n}`);
  }
}
getName('Jane');
getName(90); // Error

// Type Generics

function identity<T>(arg: T): T {
  return arg;
};
console.log(`Type Generics. This is a number ${identity(1000)}`);
