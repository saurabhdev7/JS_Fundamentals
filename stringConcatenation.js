/*

let firstName = 'Saurabh';
let lastName = 'Dubey';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

let num1 = '10';
let num2 = '20';

let newNum = num1 + num2;
console.log(newNum);

let num3 = '10';
let num4 = '20';

let newNum1 = +num3 + +num4;
console.log(newNum1);
*/

let nam = 'Saurabh';
let age = 27;

let aboutMe = "My name is " + nam +  "and My age is " + age;
console.log(aboutMe);

// Template string or Template literal (ES6) :- Backtick character `` - above tab key on keyboard - used to create multi line string and embed expression in string using ${expression} - expression is evaluated and result is placed in place of ${} - expression can be variable, function call, any valid expression etc.

let aboutMe1 = `My name is ${nam} and My age is ${age}`;
console.log(aboutMe1);