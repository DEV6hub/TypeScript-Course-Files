// Enum
enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

// Sample usage
console.log('<---Card Suit--->');
console.log(CardSuit);

console.log('<---Where is Diamonds?--->');
let card: CardSuit = CardSuit.Diamonds;
console.log(card);

// Const Enum
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

let up: Direction = Direction.Up;

console.log('<---Directions--->');
console.log(up);
