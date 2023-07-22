// Q- Write a program that prompts the user to enter two numbers, obtains them from the user and prints their sum, product, difference, quotient and remainder.

// parseInt() function converts the string into an integer. 

// prompt() function displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page.


const firstNumber = parseInt(prompt("Enter the first number: ")); 
const secondNumber = parseInt(prompt("Enter the second number: "));
const sum = firstNumber + secondNumber

console.log(`The sum of ${firstNumber} and ${secondNumber} is : ${sum}`);


// Q - Write a program to find out the square root of a number.

// Square root of a number can be calculated using Math.sqrt() function.

// Math.sqrt() function returns NaN if the number passed to it is negative.
// Math.sqrt() function returns NaN if the number passed to it is not a number.

const num = parseInt((prompt('Enter a number: ')));
const result = Math.sqrt(num);

console.log(`The square root of ${num} is : ${result}`);

