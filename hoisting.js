// Hoisting - It moves declaration to the top of the scope before execution.
// It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Hoisting does not work with let and const variables and throws an error.

hello();

function hello() {
    console.log("Hello World");
}