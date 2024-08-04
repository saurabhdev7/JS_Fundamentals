/* 
Data types : The type of data that can be stored in a variable is called data type.

There are two types of data types in JavaScript.
1. Primitive data types
2. Non-primitive (reference) data types

1. Primitive data types : Primitive data types are predefined (already defined) in JavaScript.

There are 6 types of primitive data types in JavaScript.
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol (added in ES6)

*/

let firstName;
console.log(firstName);    // undefined
firstName = 'Saurabh';
console.log(typeof firstName, firstName);    // Saurabh

let myVariable = null;
console.log(myVariable);     // null
myVariable = 'Bipin';
console.log(myVariable, typeof myVariable);      // Bipin

let num = BigInt(700141);
console.log(num, typeof num);      // 700141n bigint

