// Array : Array is used to store multiple values in a single variable. It is like a special variable which can hold more than one value at a time. They are ordered collection of items. Each item inside an array is called an element. Each element has a unique index number which represents its position in the array. 

// Array can be created using two ways:
// 1. Using array literal
// 2. Using array constructor (new keyword)

// Ways to create an array :

// 1. Using array literal : 
// Syntax : const arrayName = [value1, value2, value3, ...]

// 2. Using array constructor (new keyword) :
// Syntax : const arrayName = new Array(value1, value2, value3, ...)



const student = ['Saurabh', 'Bipin', 'Navin', 'Subhajit', 'Ishan']
console.log(student);



// ------------------------------ Array Methods ------------------------------



let array1 = ['Saurabh', 'Bipin', 'Navin', 'Subhajit'];

// let array2 = [... array1, 'Sumit', 'Shubham'];      // cloning of array1 to array2 using spread operator

let array2 = array1.slice(0).concat(['Sumit', 'Shubham']);

// console.log(array2);

// array1.push('Ishan');

// console.log(array1);
console.log(array2);

console.log(array1 === array2) // false 