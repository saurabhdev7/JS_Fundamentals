// ----------------------------- Logical Operators --------------------------------

// Operators : ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ?:

// Prefix increment/decrement operator : In this case, the value of x is incremented/decremented first by 1 and then assigned to y.

// Postfix increment/decrement operator : In this case, the value of x is assigned to y first and then incremented/decremented by 1.

// let x = 5;    
// let y = ++x;
// console.log(x, y);      // 6 6

// let x = 5;
// let y = x++;
// console.log(x, y);      // 6 5

// let x = 5;
// let y = x--;
// console.log(x, y);      // 4 5

// let x = 5;
// let y = --x;
// console.log(x, y);      // 4 4

// let num = 15;
// let newNum = num++ + 5;
// console.log(num, newNum);


// let num = 15;
// let newNum = --num + 5;
// console.log(num, newNum);



var x = 5;
var y = 6;
console.log(x == y);


var x = 5;
var y = "5";
console.log(x === y);
console.log(x == y);

a = 5;
b = 6;
c = 7;

console.log(a != b || a != c);
console.log(a>b && a>c && b>c);
console.log(a>b || a>c || b>c || c>a);

let naam = 'Saurabh';
let marks = 25;

if(naam[0] === 'S' && marks > 20) {
    console.log('Your name is Saurabh and you have scored more than 20 marks');
}else{
    console.log('You are not Saurabh');
}



// --------------------- Mathematical Operators ------------------------------


let score = 50;

let result = score*2 + (4*3) -8 / 2 % 4;
console.log(result);

// Using Priority and Precedence :
// 1. () Brackets
// 2. ** Power operators
// 3. * / %  ( From left to right)
// 4. + - ( From left to right)



// --------------------- Terenary Operator -----------------------------------

// Ternary Operator : They are used to assign a value to a variable based on some condition. It is the only operator that takes three operands. The operator is a question mark (?), and colon (:).

// Syntax is as follows:  variable = (condition) ? value1: value2

// If the condition is true, the variable is assigned value1. If the condition is false, the variable is assigned value2.


let age = 19;
let validId = false;

let isAdult = (age> 18) ? (validId === true) ? 'You can vote' : 'Disqualified' : 'Not eligible'
// If first condition is true, then second condition will be checked.

console.log(isAdult);