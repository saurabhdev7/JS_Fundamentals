// if else statement :
// Syntax :  if(condition) { code to be executed if condition is true } else { code to be executed if condition is false}

/*
const x = 11;
if(x > 100)
{
    console.log("x is greater than 11");
}

if(x < 12)
{
    console.log("x is lesser than 12");

    if(x == 11)
    {
        console.log("x is equal to 11");
    } 
}

else
{
    console.log("Leave");
}

*/

// Nested if else statement : 

let winningNumber = 11;
let guessNumber = +prompt('Guess a number :')

if(winningNumber === guessNumber){
    console.log('Congrats! You have won the lottery');
}
else{
    if(guessNumber > winningNumber){
        console.log('Too High, Try again');
    }else{
        console.log('Too Low, Try again');
    }
}