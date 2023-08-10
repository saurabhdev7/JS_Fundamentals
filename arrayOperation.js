// Array operations : 

// 1. push() : adds an element at the end of the array.
// 2. unshift() : adds an element at the beginning of the array.


// 3. pop() : removes an element from the end of the array. 
// 4. shift() : removes an element from the beginning of the array.


// ------------ push(), pop(), unshift(), shift(), reverse() changes the original array. -------------


// 5. splice() : removes an element from the specified index.
// Adds and/or removes elements from an array. It changes the original array.
// Returns deleted items in the form of an array.


// Syntax : array.splice(index, no. of deleteValue, valueToBeAdded);  
// deletevalue and valueToBeAdded are optional.


// 6. slice() : returns a new array from the specified index.
// Returns selected elements in an array as a new array object. It does not change the original array.


// 7. sort() : sorts the array in ascending order.
// 8. reverse() : reverses the array. It changes the original array.


// 9. includes() : checks if the element is present in the array.


// 10. indexOf() : returns the index of the element.
// 11. lastIndexOf() : returns the last index of the element.


// 12. join() : converts the array into a string. It does not change the original array.


// 13. toString() : converts the array into a string.

// 14. concat() : joins two or more arrays. It does not change the original array.


// --------------------------------- Array Operations ----------------------------------


let fruits = ['Apple', 'Banana', 'Grapes', 'Mango'];
console.log(fruits);


// fruits.push('Pineapple');
// console.log(fruits);


// let poppedFruit = fruits.pop();
// console.log(`Popped fruit is : ${poppedFruit}`);

// console.log(fruits);


// fruits.unshift('Orange');
// console.log(fruits);


// fruits.shift();
// console.log(fruits);


// let splicedFruit = fruits.splice(1, 2);
// console.log(splicedFruit); 
// console.log(fruits);


// fruits.splice(1, 2, 'Kiwi', 'Guava');
// console.log(fruits);


// let slicedFruit = fruits.slice(1, 3);
// console.log(slicedFruit);
// console.log(fruits);       // original array is not changed.


// fruits = [];     // emptying an array.
// console.log(fruits);

// fruits[0] = 'Blueberry';
// fruits[1] = 'Strawberry';
// console.log(fruits);


// fruits.length = 0;     // emptying an array using length property.
// console.log(fruits);  

// console.log(fruits.includes('Kiwi'));

// let reversedFruit = fruits.reverse();
// console.log(reversedFruit);


/*

const students = [
    {
        Name: "Saurabh",
        Age: 25,
        RollNo: 1,
        Marks: 95
    },

    {
        Name: "Navin",
        Age: 26,
        RollNo: 2,
        Marks: 96
    },

    {
        Name: "Bipin",
        Age: 27,
        RollNo: 3,
        Marks: 98
    }
]
console.log(students);
console.log(students[0].Name);


students.pop();
console.log(students);


students.push({Name: "Ishan",
Age: 12,
RollNo: 8,
Marks: 92
});

console.log(students);

*/