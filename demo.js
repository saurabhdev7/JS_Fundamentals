
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
