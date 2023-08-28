// this keyword --> It refers to the object it belongs to.

// In regular function, this refers to the global object.

// In a method, this refers to the owner object.

// In a function, this refers to the global object.



// console.log(this); // window object



const person = {
    name : 'Saurabh',
    age : 20,
    greet : function(){
        console.log(`Hello ${this.name}! Welcome to the world of JS`)
    }
}

person.greet()



const user = {
    name : 'Saurabh',
    age : 20,
    profession : 'JS Developer',
    details : function(){
        let myDetail = ['Location : Kolkata']
        console.log(`My current location is ${myDetail}`);
        console.log(this);
    }
}

user.details()