// Callback function : A function which is passed as an argument to another function is called a callback function. 
// This function is invoked inside the other function.




const doSomething = function(callback){
    console.log('Samose ban rahe hai!');
    setTimeout(function(){
        callback();
    }, 3000);
}

const myCallback = function(){
    console.log('Samose ban gaye hai!');
}

doSomething(myCallback);