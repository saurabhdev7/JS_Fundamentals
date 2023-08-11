function findTarget(array, myTarget){
    for(let i=0; i<array.length; i++){
        if(array[i] === myTarget){
            return i;
        }
    } return -1;
}
const myArray = [1,2,3,5,6];
const result = findTarget(myArray, 5);
console.log(result);


// Function Expression : When we assign a function to a variable that is called function expression. This is also called anonymous function. 

const add = function(num1, num2){
    return num1 + num2;
}
const sum = add(15, 17);
console.log(sum);