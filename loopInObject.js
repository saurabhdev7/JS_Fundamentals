// Iteration in object using for...in loop and for...of loop in JavaScript (ES6).

// Syntax of for...in loop:- 
// for (variable in object) {
//     statement or block of code to be executed }

const person = {
    Name : 'Saurabh',
    Age : 27,
    Location : ['Kolkata', 'Uttar Pradesh']
}

// Type : 1

// for (let key in person){
//     console.log(`${key} : ${person[key]}`)
// }

// console.log(Object.keys(person));     // It will return an array of keys of the object.
// console.log(person);


// Type : 2

for (let [key, value] of Object.entries(person)){
    console.log(`${key} : ${value}`);
}