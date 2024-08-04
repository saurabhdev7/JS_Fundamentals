const cities = ['KOLKATA', 'DELHI', 'MUMBAI'];

const result = cities.map((city) => city.toLowerCase());

console.log(result);



function multiply(a, b) {
    return a * b;
}
let answer = multiply(2, 3);
console.log(`The result is ${answer}`);


// Unlimited arguments accept

function addNumbers(){
    let ans  = 0;
    for(let i = 0; i < arguments.length; i++){
        ans = ans + arguments[i];
    }
    return ans;
}
let result1 = addNumbers(5,95,200,150,55);
console.log(result1)