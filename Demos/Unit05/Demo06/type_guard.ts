class Foo {
    foo: number = 123;
    common: string = '123';
}

class Bar {
    bar: number = 123;
    common: string = '123';
}

function doStuff(arg: Foo | Bar): void {
    'use strict';
    if (arg instanceof Foo) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    if (arg instanceof Bar) {
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }

    console.log(arg.common); // OK
    console.log(arg.foo); // Error!
    console.log(arg.bar); // Error!
}

console.log('<----The Type Guard---->');
doStuff(new Foo());
doStuff(new Bar());

console.log('<----The as operator---->');
let x: any = 2;
let y: number = <number>x;
console.log('The Type Guard', y);

// Is equivalent to:
let a: any = 3;
let b: number = a as number;
console.log('The as Operator (a):', a);
console.log('The as Operator (b):', b);
