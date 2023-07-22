// Operators : ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ?:

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


// Ternary Operator : They are used to assign a value to a variable based on some condition. It is the only operator that takes three operands. The operator is a question mark (?), and colon (:). The general 
// Syntax is as follows:  variable = (condition) ? value1: value2
// If the condition is true, the variable is assigned value1. If the condition is false, the variable is assigned value2.


let age = 18;
let isAdult = age>= 18 ? 'You are adult' : 'You are not adult';

console.log(isAdult);