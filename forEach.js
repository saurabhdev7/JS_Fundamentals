// forEach method is used to iterate over an array and perform an operation on each element of the array.


// forEach method takes a callback function as an argument and executes that callback function on each element of the array one by one.


// The callback function takes three arguments: 
// --> the element,
// --> the index of the element,
// --> the array itself.


// Syntax : arrayName.forEach((currentvalue, index, arr) => { function logic });


// let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot', 'Potato', 'Tomato'];

// vegetables.forEach(function(element, index){
//     console.log(`element is - ${element} and index - is ${index}`);
// });



// ------------------------------------------------------------------------------------


let users = [
    
{   firstName : 'Saurabh',
    age : 26
},

{   firstName : 'Ankit',
    age : 24
},

{   firstName : 'Bipin',
    age : 28
},

{   firstName : 'Subhajit',
    age : 22
}
]

users.forEach((user) => {
    console.log(`Name is - ${user.firstName}`);                                                                        
})