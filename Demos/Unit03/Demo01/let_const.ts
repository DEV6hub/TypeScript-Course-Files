// Let
let list: HTMLElement = document.getElementById('list');

for (var i: number = 1; i <= 5; i++) {
  var item: HTMLLIElement = document.createElement('li');

  item.appendChild(document.createTextNode('Item ' + i));

  item.onclick = function (event: MouseEvent): void {
    console.log('Item ' + i + ' is clicked.');
  };

  list.appendChild(item);
}

// Const
const numb: number = 7;
// numb = 20; // This will result in an Error:
console.log('my favorite number is: ' + numb);
