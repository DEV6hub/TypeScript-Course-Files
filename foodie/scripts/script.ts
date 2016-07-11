const x: string = 'World';
const list: HTMLElement = document.getElementById('list');
const nameEl: HTMLInputElement = document.getElementById('newRecipe') as HTMLInputElement;
const linkEl: HTMLInputElement = document.getElementById('newLink') as HTMLInputElement;
const submitBtn: HTMLElement = document.getElementById('submitRecipe');

interface IRecipe {
  title: string;
  link: string;
}


class Recipe implements IRecipe {
  constructor(
    public title: string,
    public link: string,
    public completed: boolean = false
  ) { }

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
}


const recipeBook: RecipeBook = new RecipeBook();
recipeBook.add(new Recipe('Simple Pan-Seared Salmon', 'http://www.thekitchn.com/recipe-simple-pan-seared-salmon-recipes-from-the-kitchn-214529'));

function render(): void {
  list.innerHTML = recipeBook.displayRecipes().join(' ');
}

render();

submitBtn.addEventListener('click', (ev: MouseEvent): any => {
  ev.preventDefault();
  const title: string = nameEl.value;
  const link: string = linkEl.value;
  recipeBook.add(new Recipe(title, link));
  render();
  nameEl.value = '';
  linkEl.value = '';
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
