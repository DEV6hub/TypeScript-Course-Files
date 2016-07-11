function* getNames(): IterableIterator<string> {
  console.log('2.');
  yield 'John';
  console.log('4.');
  let myValue: string = yield 'Stephanie';
  console.log(`6, Passed in value: ${myValue}`); // Passed in value: 964
}

const nameGenerator: IterableIterator<string> = getNames();
console.log('1.');
console.log(`3. ${nameGenerator.next().value}`); // 3. John
console.log(`5. ${nameGenerator.next().value}`); // 5. Stephanie
console.log(`7. Done? ${nameGenerator.next(964).done}`); // 7. Done? true
