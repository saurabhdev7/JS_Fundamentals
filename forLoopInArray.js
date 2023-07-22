// for loop in array : for loop is used to iterate over an array of items and perform an action on each of them.

// Syntax : for (let i = 0; i < array.length; i++) { // ... }


let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot', 'Potato', 'Tomato'];

let vegetables2 = [];

for(i=0; i < vegetables.length; i++) {
    vegetables2.push(vegetables[i].toUpperCase());
}
console.log(vegetables2);

// for of loop in array :

// Syntax : for (variable of iterable) { // ... }

const vegetables3 = ['Cabbage', 'Turnip', 'Radish', 'Carrot', 'Potato', 'Tomato'];
const vegetables4 = [];

for(let vegetable of vegetables3){
    vegetables4.push(vegetable.toLocaleLowerCase());
}