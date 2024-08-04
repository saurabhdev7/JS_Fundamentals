// Type Conversion : The process of converting one data type (integer, string, float, etc.) to another data type is called type conversion.

// In JavaScript, there are two types of type conversions:

// 1. Implicit Type Conversion - Automatic Type Conversion
// 2. Explicit Type Conversion - Manual Type Conversion

// In Implicit type conversion, JavaScript automatically converts one data type to another data type. This is also called coercion.

// In Explicit type conversion, JavaScript developer converts the data type of an object to another data type.

/*
let naam;
naam = 'Saurabh' + 5;
console.log(naam); // Saurabh5 string

naam = 'Saurabh' + true;
console.log(naam); // Saurabhtrue string

naam = 'Saurabh' + undefined;
console.log(naam); // Saurabhundefined string

naam = 'Saurabh' + null;
console.log(naam); // Saurabhnull string

*/

//String of numbers when used with -, +, /, *, converts into number datatype.
/*
let nam;
nam = '4' - '3';
console.log(nam); // 1 number

nam = '4' - 3;
console.log(nam); // 1 number

nam = '4' * 3;
console.log(nam); // 12 number

num = '4' / 3;
console.log(num); // 1.3333333333333333 number
*/

// If boolean is used in JavaScript, true is converted to 1 and false is converted to 0.

/*
let num;
num = 4 + true;
console.log(num); // 5 number

num = 4 - true;
console.log(num); // 4 number

num = 4 * true;
console.log(num); // 4 number

num = 4 / false;
console.log(num); // Infinity number
*/

// Null is considered as 0 when used with numeric operators.

/*
let result;
result = 4 + null;
console.log(result); // 4 number

result = 4 - null;
console.log(result); // 4 number

result = 4 * null;
console.log(result); // 0 number

result = 4 / null;
console.log(result); // Infinity number
*/