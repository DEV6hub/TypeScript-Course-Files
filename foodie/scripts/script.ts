/// <reference path="../typings/index.d.ts" />

// const x: string = 'World';
const mockTitle: string = 'Simple Pan-Seared Salmon';
const mockLink: string = 'http://www.thekitchn.com/recipe-simple-pan-seared-salmon-recipes-from-the-kitchn-214529';
// const list: HTMLElement = document.getElementById('list');
const list: JQuery = $('#list');
// const nameEl: HTMLInputElement = document.getElementById('newRecipe') as HTMLInputElement;
const nameEl: JQuery = $('#newRecipe');
// const linkEl: HTMLInputElement = document.getElementById('newLink') as HTMLInputElement;
const linkEl: JQuery = $('#newLink');
// const submitBtn: HTMLElement = document.getElementById('submitRecipe');
const submitBtn: JQuery = $('#submitRecipe');

function recipeDefaults(title: string, link: string): (target: Function) => void {
  return function(target: Function): void {
    target.prototype.title = title;
    target.prototype.link = link;
  };
}


interface IRecipe {
  title: string;
  link: string;
}

@recipeDefaults(mockTitle, mockLink)
class Recipe implements IRecipe {
  title: string;
  link: string;
  completed: boolean = false;

  displayRecipe(): string {
    return `<a href="${this.link}" target="_blank">${this.title}</a>`;
  }
}

class RecipeBook {
  private list: Recipe[] = [];

  add(recipe: Recipe): void {
    this.list.push(recipe);
  }

  displayRecipes(): string[] {
    return this.list.map((recipe: Recipe, index: number) => {
      return `
        <li>
          ${recipe.displayRecipe()}
          <div id="checkbox-delete">
            <input type="checkbox" id="recipeDone">
            <button id="deleteRecipe" class="delete" data-id="${index}">Delete</button>
          </div>
        </li>
      `;
    });
  }

  remove(index: number): void {
    this.list.splice(index, 1);
  }
}


const recipeBook: RecipeBook = new RecipeBook();
recipeBook.add(new Recipe());

function render(): void {
  list.html(recipeBook.displayRecipes().join(' '));
}

render();

submitBtn.on('click', (ev: JQueryEventObject): void => {
  ev.preventDefault();
  const title: string = nameEl.val();
  const link: string = linkEl.val();
  const recipe: Recipe = new Recipe();
  recipe.title = title;
  recipe.link = link;
  recipeBook.add(recipe);
  render();
  nameEl.val('');
  linkEl.val('');
});

list.on('click', '.delete', (ev: JQueryEventObject) => {
  recipeBook.remove($(ev.target).data('id'));
  render();
});

// function greeter(greeting: string): string {
//   return 'Hello, ' + greeting;
// }

// list.innerHTML = (greeter(x));
// nameEl.value = 'Simple Pan-Seared Salmon';
// linkEl.value = 'http://www.thekitchn.com/recipe-simple-pan-seared-salmon-recipes-from-the-kitchn-214529';

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

const cook: { firstName: string, lastName: string, spouse: { firstName: string, lastName: string } } = {
  firstName: 'John',
  lastName: 'Doe',
  spouse: {
    firstName: 'Jane',
    lastName: 'Doe'
  }
};

const {firstName: husband, spouse: {firstName: wife}, lastName } = cook;

console.log(`${husband} and ${wife} ${lastName}`);

const timeDelay: Promise<string> = new Promise<string>((resolve: (value?: string) => void, reject: (reason?: any) => void) => {
  console.log('Inside the promise');
  setTimeout(() => resolve('Outside the promise'), 1000);
});

timeDelay.then((message: string) => console.log(message));
