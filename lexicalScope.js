// Lexical Scope: A function can access all variables and functions defined inside the scope in which it is defined.

const myVar = 'Value1';

function myApp(){
    //const myVar = 'Value 25';

    function myFunc(){
        //const myVar = 'Value2';
        const myFunc2 = () => {
            console.log('myFunc: ', myVar);
        }
        myFunc2();
    }
    
    myFunc();
}

myApp();