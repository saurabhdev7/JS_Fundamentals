// alert('Hello World');

const person = {
    name : 'Saurabh',
    age : 20,
    greet : function(){
        console.log(`Hello ${this.name}! Welcome to the world of JS`)
    }
}

person.greet()