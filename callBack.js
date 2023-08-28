function sayHello(){
    console.log('Hello');
}


function sayHi(){
    console.log('Hi');
}


function add (num1, num2,callback){
    console.log(num1+num2);
    callback();
}
let a = 10;
let b = 20;

add(a,b,sayHello);

add(15, 30, sayHi);

add(90, 10, ()=>{
    console.log('I am a callback function');
})