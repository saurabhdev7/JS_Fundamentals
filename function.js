// Function : It is a block of code which is used to perform a specific task. It is also called as method.

// Types of function: 
// 1. Named function
// 2. Anonymous function
// 3. Arrow function


function displayTable(y)
{
    var i=0;
    for(i=0;i<=10;i++)
    {
        console.log(y,"x",i,"=",y*i);
    }
}
displayTable(5);



function sumTwoNumber(num1,num2){
    return num1 + num2;
}
const resultValue = sumTwoNumber(54,46);
console.log(resultValue);