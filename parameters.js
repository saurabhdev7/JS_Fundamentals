// 1. Default parameters in ES5 : 
/*
function addTwo(a,b){
    if (b==='undefined'){
        b=1;
    }
    return a+b;
}
const ans = addTwo(2,5);
console.log(ans);


// 1a. Default parameters in ES6 :

function addTwo(a,b=10){
    return a+b;
}
const ans2 = addTwo(2);
console.log(ans2);

*/

// 2. Rest parameters in ES6 :

/*
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFunc(1,2,3,4,5,6);
*/

