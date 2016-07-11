class Animal {
  constructor(
    protected age: number,
    public firstName: string,
    private lastName: string
  ) {}
}

let dog: Animal = new Animal(12, 'James', 'Brown');
console.log(dog);

