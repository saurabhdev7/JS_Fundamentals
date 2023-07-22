/*
var i=0;
while(i<=10){
    console.log("Hello",i);
    break;
    i++;
}
*/

var i=0;
while(i<4)
{
    i++;
    if(i==2)
    {
        continue;
    }
    console.log("Hello",i);
    
}
console.log("Bye");