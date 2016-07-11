class Foo {
  public foo( @logParameter foo: string): void {
    console.log('bar');
  }
  public foobar(foo: string, @logParameter bar: string): void {
    console.log('foobar');
  }
}

function logParameter(target: any, key: string, index: number): void {
  let metadataKey: string = `log_${key}_parameters`;
  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index);
  } else {
    target[metadataKey] = [index];
  }
}

let x: Foo = new Foo();
console.log(x);
