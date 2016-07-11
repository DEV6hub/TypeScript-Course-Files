function a(constructor: Function) {
  console.log(`a(): evaluated`);
  console.log(`a(): called`);
}
console.log(`*****`);

function b(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(`b(): evaluated`);
  console.log(`b(): called`);
}

@a
class C {
  @b
  method(): string {
    return 'Hello!';
  }
}
