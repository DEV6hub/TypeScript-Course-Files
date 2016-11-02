function greeter(greeting: string): string {
  return 'Hello, ' + greeting;
}

var x: string = 'World';
var recipeBook: any[] = [];

var list: HTMLElement = document.getElementById('list');
var nameEl: HTMLInputElement = document.getElementById('newRecipe') as HTMLInputElement;
var linkEl: HTMLInputElement = document.getElementById('newLink') as HTMLInputElement;

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
