// var -- function scope
// let -- block scope
// const -- block scope

// Scope: It is the accessibility of variables, functions and objects in some particular part of your code during runtime.

function bioData() {
    let firstName = 'Saurabh';
    console.log(firstName);

    if (true) {
        let lastName = 'Dubey';
        console.log(lastName);
        console.log(firstName);
    }
    // console.log(lastName);          // Error -- as lastName is not defined outside the block scope of if statement. 
}

bioData();