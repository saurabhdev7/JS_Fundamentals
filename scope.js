// ------------------------- Scope of Variables -------------------------- //


// var -- function scope
// let -- block scope
// const -- block scope

// Scope: It is the accessibility of variables, functions and objects in some particular part of your code during runtime.




// Global Scope : Any variable/expression which is written outside -i.e, not inside any functions, blocks - is said to be in Global Scope. They are accessible from anywhere in the code.





function bioData() {
    let firstName = 'Saurabh';
    console.log(firstName);

    if (true) {
        let lastName = 'Dubey';       // If we use var instead of let, then lastName will be accessible outside the block scope of if statement.
        console.log(lastName);
        console.log(firstName);
    }
    // console.log(lastName);    // Error -- as lastName is not defined outside the block scope of if statement. 
}

bioData();