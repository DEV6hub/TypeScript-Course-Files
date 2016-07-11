class Person {
  constructor(public name: string) { }

  sayHello(friends: string[]): void {
    // this will work
    friends.forEach((friend: string) => {
      console.log(`${this.name} says hello to ${friend}`);
    });

    // this will not
    friends.forEach(function(friend: string) {
      console.log(`${this.name} says hello to ${friend}`);
    });
  }
};

const jane = new Person('Jane');
const friends: string[] = ['Bob', 'Sally'];
jane.sayHello(friends);

