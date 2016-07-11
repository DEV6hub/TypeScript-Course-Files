// Basic Types
var isDone: boolean = false;
console.log('boolean:', isDone);

var lines: number = 42;
console.log('lines:', lines);

var name: string = 'Andders';
console.log('name:', name);

// Any Type
var notSure: any = 2;
notSure = 'maybe a string instead';
notSure = false;
console.log('notSure:', notSure);

// Arrays
var list: number[] = [1, 2, 3];
console.log('list:', list);

var anotherList: Array<number> = [1, 2, 3];
console.log('anotherList:', anotherList);

// Enumerations
enum Color {Red, Green, Blue};
var c: Color = Color.Green;
console.log('c:', c);

// Void
function bigHorribleAlert(): void {
  'use strict';
  alert("I'm in a little annoying box!");
}

bigHorribleAlert();
