// Switch statement : Multiple if-else statements can be replaced by switch statement if there are multiple conditions to be checked for a single variable.

/*
 Syntax : 

 switch(expression) {
     case x:
       code block
       break;
    case y:
      code block
      break;
    default:
      code block
  }
*/

/*

let num = 3;

switch(num){
    case 1:
        console.log('Apple');
        break;
    case 2:
        console.log('Banana');
        break;
    case 3:
        console.log('Orange');
        break;
    case 4:
        console.log('Grapes');
        break;
    default:
        console.log('No fruit');
}

*/


let area = 'circle';
const PI = 3.14;
let r = 5;
let l = 2;
let b = 3;

switch(area){
    case 'circle':
        console.log(`The area of circle is ${PI * r**2}`);
        break;

    case 'rectangle':
        console.log(`The area of rectangle is ${l * b}`);
        break;

    case 'triangle':
        console.log(`The area of triangle is ${l * b / 2}`);
        break;
    default:
        console.log('Please enter valid data');
}