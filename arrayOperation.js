// Array operations : 

// 1. push() : adds an element at the end of the array.
// 2. unshift() : adds an element at the beginning of the array.

// 3. pop() : removes an element from the end of the array.
// 4. shift() : removes an element from the beginning of the array.

// 5. splice() : removes an element from the specified index.
// Adds and/or removes elements from an array. It changes the original array. 

// 6. slice() : returns a new array from the specified index.
// Returns selected elements in an array as a new array object. It does not change the original array. 

// 7. sort() : sorts the array in ascending order.
// 8. reverse() : reverses the array.

// 9. includes() : checks if the element is present in the array.

// 10. indexOf() : returns the index of the element.
// 11. lastIndexOf() : returns the last index of the element.

// 12. join() : converts the array into a string.
// 13. toString() : converts the array into a string.

// 14. concat() : joins two or more arrays.

// ++++++++++++++++++++++++++++++++++ Operations ++++++++++++++++++++++++++++++++++++++

let fruits = ['Apple', 'Banana', 'Grapes', 'Mango'];
console.log(fruits);


// fruits.push('Pineapple');   
// console.log(fruits);

// let poppedFruit = fruits.pop();    
// console.log(fruits);
// console.log(`Popped fruit is : ${poppedFruit}`);

// fruits.unshift('Orange');   
// console.log(fruits);

// fruits.shift();      
// console.log(fruits);

// fruits.splice(1, 2);   
// console.log(fruits);

// fruits.splice(1, 2, 'Kiwi', 'Guava');   
// console.log(fruits);

// fruits = [];     // emptying an array.
// console.log(fruits);

// fruits.length = 0;    // emptying an array.
// console.log(fruits);  

// console.log(fruits.includes('Kiwi'));

// console.log(fruits.join());

console.log(fruits.slice(1, 3));