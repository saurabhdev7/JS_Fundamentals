// ---------------------------- Default parameters in ES6 ----------------------------

// Default parameters are used to assign default values to the parameters of a function.

// If the function is called without passing any value to the parameter, then the default value is used. 


// // Example : 1


// function addTwo(a,b=10){
//     return a+b;
// }
// const result = addTwo(2);
// console.log(result);



// // Example : 2

// const register = (name, password, id='X13AE') => {
//     console.log(name, password, id)
// }
// register('Saurabh', '1287')



// ---------------------------- Rest parameters in ES6 ------------------------------


// Rest parameters are used to pass variable (many) number of arguments to a function.
// It is used to pack the arguments/elements into an array.


function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFunc(1,2,3,4,5,6);


