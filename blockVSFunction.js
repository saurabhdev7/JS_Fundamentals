// --------------------------- Block Scope Vs Function Scope (ES6) -----------------------------


// Var is function scoped 
// Let & Const is block scoped.


/*

if(true){
    let firstName = 'Saurabh';
    console.log(firstName);
}
console.log(firstName);

*/


function myName(){
    if(true){
        var firstName = 'Saurabh';    // let & const will not work here and will throw error.
        console.log(firstName);
    }
    console.log(firstName);
}

myName();