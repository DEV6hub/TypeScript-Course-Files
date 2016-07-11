function greeter(greeting: string): string {
  return 'Hello, ' + greeting;
}

const x: string = 'World';
const recipeBook: any[] = [];

const list: HTMLElement = document.getElementById('list');
const nameEl: HTMLInputElement = document.getElementById('newRecipe') as HTMLInputElement;
const linkEl: HTMLInputElement = document.getElementById('newLink') as HTMLInputElement;

list.innerHTML = (greeter(x));
nameEl.value = 'Simple Pan-Seared Salmon';
linkEl.value = 'http://www.thekitchn.com/recipe-simple-pan-seared-salmon-recipes-from-the-kitchn-214529';

enum Ingredients {
  Salt,
  Pepper,
  Paprika,
  'Olive Oil',
  Butter
}

console.log('The value of Butter is:', Ingredients.Butter);


const ingredients1: string[] = ['Salt', 'Pepper', 'Paprika'];
const ingredients2: string[] = ['Olive Oil', 'Butter'];
const ingredientsList: string[] = [...ingredients1, ...ingredients2];

console.log('Number of Ingredients:', ingredientsList.length);

const cook: {firstName: string, lastName: string, spouse: {firstName: string, lastName: string}} = {
  firstName: 'John',
  lastName: 'Doe',
  spouse: {
    firstName: 'Jane',
    lastName: 'Doe'
  }
};

const {firstName: husband, spouse: {firstName: wife}, lastName } = cook;

console.log(`${husband} and ${wife} ${lastName}`);

const timeDelay: Promise<string> = new Promise<string>((resolve, reject) => {
  console.log('Inside the promise');
  setTimeout(() => resolve('Outside the promise'), 1000);
});

timeDelay.then((message: string) => console.log(message));
