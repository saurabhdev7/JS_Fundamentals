// Function : It is a block of code which is used to perform a specific task. It is also called as method.

// Types of function: 
// 1. Named function
// 2. Anonymous function
// 3. Arrow function


function displayTable(y)
{
    let i=1;
    for(i=1;i<=10;i++)
    {
        console.log(`${y} x ${i} = ${y*i}`);
    }
}
// displayTable(5);



function sumTwoNumber(num1,num2){
    return num1 + num2;
}
const resultValue = sumTwoNumber(54,46);
// console.log(resultValue);



let invitation = function(name){
    console.log(`Hello! ${name} you are invited to the party`);
}
// invitation("Subhajit");
// invitation("Bipin");



let ageCalculation = function(birthYear, currentYear = 2021){
    let result = currentYear - birthYear;
    return result;
    // Any code after return statement will not be executed. 
}
// console.log(ageCalculation(1998, 2022));