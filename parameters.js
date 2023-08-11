// ---------------------------- Default parameters in ES6 ----------------------------

// Default parameters are used to assign default values to the parameters of a function.

// If the function is called without passing any value to the parameter, then the default value is used. 


function addTwo(a,b=10){
    return a+b;
}
const ans2 = addTwo(2,4);
console.log(ans2);


// ---------------------------- Rest parameters in ES6 ------------------------------

// Rest parameters are used to pass a variable number of arguments to a function. 

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFunc(1,2,3,4,5,6);


