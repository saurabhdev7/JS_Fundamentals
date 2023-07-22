/* Code: while loop

let x=0;
while(x<10) {
    console.log(x);
    x++;
}
console.log("Bye");


let x=10;
while(x<15) {
    console.log(x);
    x += 2;
}
console.log("Bye");

*/

/*
let x=2;
let i=1;     // Initialisation -- Condition Check -- Code Execute -- Increment/Decrement -- Condition Check -- Code Execute -- Increment/Decrement.
while(i<=5)
{
    console.log(x,"x",i,"=",x*i);
    i++;
}
*/

/*
Code : for loop 

let x=5;
for(var i=1;i<=10;)
{
    console.log(x,"x",i,"=",x*i);
    i++;
}
*/
// Sum of first 10 natural numbers :

let total = 0;
let i = 0;

while (i<=10){
    total = total + i;
    i++;
}
console.log(total);
