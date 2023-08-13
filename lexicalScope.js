// Lexical Scope: A function can access all variables and functions defined inside the scope in which it is defined.



const lastName = 'Dubey';

const printName = function(){
    const firstName = 'Saurabh';
    function myFunc(){
        console.log(firstName);
        
        // It is lexically present in the scope of myFunc(). 
        // It is not defined in the scope of myFunc(), but it is defined in the scope of printName().

        console.log(lastName);       // It is present in the Global scope.
    }
    myFunc();
}
printName();





// const myVar = 'Value1';

// function myApp(){
     //const myVar = 'Value 25';

//     function myFunc(){
       //const myVar = 'Value2';
//         const myFunc2 = () => {
//             console.log('myFunc: ', myVar);
//         }
//         myFunc2();
//     }
    
//     myFunc();
// }

// myApp();