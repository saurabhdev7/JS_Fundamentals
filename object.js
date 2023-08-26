// Object in JavaScript :-

/*

1. Object is a non-primitive data type in JavaScript. Objects can be seen as a collection of properties. It allows to store multiple collection of data.

2. A JavaScript key-value pairs are called properties, where key is a string (also called a “property name”), and value can be anything.

3. The values of object properties can contain primitive data types, other objects, and functions.
Object keys are unique you cannot have two keys with the same name.

4. Objects are mutable meaning their values can be changed even when they are declared as const.
5. Objects don't have index, so we cannot access them by index. 

*/


/* SYNTAX OF OBJECT:-

    const objectName = {
    key1: 'value1', 
    key2: 'value2',
    key3: 'value3',
};

*/

const student = {
    fullName: 'Saurabh Dubey',
    Class: 12,
    Pin: 700141,
    Hobbies : ["Coding", "Reading", "Playing"],

}
console.log(student);

// student.fullName = 'Saurabh Kumar Dubey';       // Updating value of property using dot notation
// console.log(student);

/*

student.Gender = 'Male';       // Adding new property to object using dot notation 
console.log(student);


student['Age'] = 21;        // Adding new property to object using bracket notation
console.log(student);


const key = 'Email';
student[key] = 'sdsilarin@gmail.com';       // Adding new property to object using variable key 
console.log(student);

*/

Object.freeze(student);     // Freezing object so that it cannot be changed.

student.location = 'Kolkata';

console.log(student);