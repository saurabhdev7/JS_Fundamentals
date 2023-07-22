// Array destructuring : Array destructuring is a way to unpack arrays into variables. 

// Syntax : const [var1, var2, ...rest] = array;

const myArray = ['Saurabh', 'Subhajit', 'Bipin', 'Navin'];

// let [first, second, third, fourth] = myArray;

let [myVar1, myVar2, ...myNewArray] = myArray;

console.log(myVar2)
console.log(myNewArray);