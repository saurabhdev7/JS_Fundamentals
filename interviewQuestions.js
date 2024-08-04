// 1.  Difference between null and undefined in JavaScript ?

// Answer: undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.


// 2. Write a JavaScript function to calculate the sum of two numbers.
/*
function sumOfTwoNumbers(a,b){
    return a+b;
}
console.log(sumOfTwoNumbers(45,15));

*/


// 3. Write a JavaScript program to find the maximum number in an array.

/*

let arr = [12, 34, 56, 1, 100, 2, 23];

function maxOfTwo (arr){
    return Math.max(...arr);
}
console.log(maxOfTwo(arr));

*/


// 4 . Write a JavaScript function to reverse a string.

let str = "Hello World";

function reverseString(str){
    return str === str.reverse().join('');
}
console.log(reverseString(str));