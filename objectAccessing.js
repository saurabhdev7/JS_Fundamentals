// Ways to Access values in Object properties :

// 1. Dot notation
// 2. Bracket notation
// 3. Object destructuring



// 1. Dot notation:
// Syntax -- objectName.keyname


// Example:

const person = {
    name: 'Subhajit',
    age: 28,
    profession: 'Full Stack Developer'
};

console.log(person.name);



// 2. Bracket notation:
// Syntax -- objectName['key']


// Example:

const person1 = {
    name1: 'Bipin',
    age1: 28,
    profession1: 'Full Stack Developer'
};

console.log(person1['profession1']);


// 3. Object destructuring:
// Syntax -- const {keyName} = objectName;


// Example:

// const fruit = {
//     color: 'red',
//     size: 'medium',
//     taste : 'sweet'
// };
// const {taste, size} = fruit;
// console.log(taste, size);


const person2 = {...person, ...person1};        // Merging two objects using spread operator.
console.log(person2);