// --------------------------------- Arrow Function ---------------------------------

// Arrow Function : This is not bound to the function itself, but to the context in which it is executed.

/*
const person = () => {
    console.log('Saurabh');
}
person();
*/

const nums = (x,y) => {
    return x + y;
    
}
let a = nums(51, -50);
console.log(a);


// Example 2 :

const findTarget = (array, target) => {
    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    } return -1;
}
const target = findTarget([1,3,4,5,6,8,9], 5);
console.log(target);