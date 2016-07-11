class Person {
  constructor(public givenName: string, public familyName: string) {}

  get name(): any {
    return `${this.givenName} ${this.familyName}`;
  }
}

const person: Person = new Person('John', 'Doe');
const personFromJson: Person = JSON.parse('{ "givenName": "John", "familyName": "Doe" }') as Person;

console.log(person.name); // John Doe
console.log(personFromJson.name); // Returns undefined
