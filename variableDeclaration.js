
// Rules for declaring variables in JavaScript are as follows:

// 1. A variable name must start with a letter, underscore (_), or dollar sign ($). It cannot start with a number.
// e.g. _name, $name, name, n1ame, na2me, n_ame, n$ame, etc. are all valid names for a variable.

// 2. A variable name cannot contain any spaces. E.g. name one, name two, etc. are not valid names for a variable. However, name_one, name_two, etc. are valid names for a variable.

// 3. A variable cannot start with a number. E.g. 1name, 2name, etc. are not valid names for a variable. However, name1, name2, etc. are valid names for a variable.

// _ , $ are only allowed special characters in variable name. e.g. %name, *name etc are not valid.


/*
var x;
x = 5;
console.log(x);

var x;
x = 6;
console.log(x); 
*/


/* 
x= 6;
console.log(x,typeof x);

x = "Saurabh";
console.log(x,typeof x);
*/


/*
let y;
y = 7;
console.log(y);
*/


/*
let y;
y = 8;
console.log(y); // error as y is already declared
*/


/*
{   
    var x = 9;
    x = 7;
    console.log(x);
}
console.log(x);

var is a global variable and can be accessed outside the block as well.



{   
    let x = 9;
    x = 7;
    console.log(x);
}
console.log(x);

let is a local variable and cannot be accessed outside the block.
*/



// var -- can be re-declared and updated but let can only be updated.
// const -- cannot be updated or redeclared.

