const languages = ['javascript', 'react', 'node', 'python'];


// const newLanguages = languages;      

//  It is copied by reference, not by value (shallow copy) - it is not a new array, it is the same array in memory address (same reference).

// newLanguages[1] = 'react.js';

// console.log(languages);
// console.log(newLanguages);

// console.log(newLanguages === languages);       // true



// -------------------------- Spread Operator -------------------------- //



const newLanguages = [...languages];       

//  It is copied by value (deep copy) - it is a new array, it is not the same array in memory address (different reference).

newLanguages[1] = 'c++';

console.log(languages);
console.log(newLanguages);

// console.log(newLanguages === languages);        // false


// ----------------------- Examples ----------------------- //


// Note : It works great when there is no nested object or array. If there are nested arrays or objects, it will not work. It will copy the reference of the nested array or object, not the value.



// Example 1 :


let originalObject = {name:'apple', price: {chennai: 120}};

let clonedObject = {... originalObject};

clonedObject.name ='orange';        // It will not reflect in originalObject

clonedObject.price.chennai = '100';         // It will reflect in originalObject

console.log(clonedObject);
console.log(originalObject);