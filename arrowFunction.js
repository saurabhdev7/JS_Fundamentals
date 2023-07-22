// Arrow Function : this is not bound to the function itself, but to the context in which it is executed.
/*
const person = () => {
    console.log('Saurabh');
}
person();
*/

const nums = (x,y) => {
    let z = x + y;
    return z;
}
let a = nums(50, -50);
console.log(a);
// Window