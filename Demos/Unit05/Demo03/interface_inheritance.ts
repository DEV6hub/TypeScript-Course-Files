interface SquareConfig {
  color?: string;
  width?: number;
}

interface Square {
  color: string;
  area: number;
}

function createSquare(config: SquareConfig): Square {
  let newSquare: Square = { color: 'red', area: 10000 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

interface BorderConfig extends SquareConfig {
  borderColor: string;
  borderStyle: string;
  borderWidth: number;
}

function createBorder(square: SquareConfig): BorderConfig {
  return { borderColor: 'yellow', borderStyle: 'solid', borderWidth: 10, color: square.color, width: square.width };
}

// Square Style
let squareStyle: Square = createSquare({});
console.log(squareStyle);

let square: HTMLElement = document.getElementById('square');

square.innerHTML = squareStyle.color;
square.style.background = squareStyle.color;

let squareRoot: number = Math.sqrt(squareStyle.area);
let sr: string = `${squareRoot}px`;
square.style.width = sr;
square.style.height = sr;

// Border Style
let borderStyle: BorderConfig = createBorder();
console.log(borderStyle);

// Add styles to square
let squareBorder: string = `${borderStyle.borderWidth}px ${borderStyle.borderStyle} ${borderStyle.borderColor}`;
square.style.border = squareBorder;
