// 1. map() Function :

// It creats a new array by performing some operation on each element of the array.

// Syntax : array.map((value, index, arr) => { ... })


// const myArray = [2,5,8,9,11];

// const newArray = myArray.map((num) => num**2);
// console.log(newArray);



const myCartoon = ['Tom','Jerry','Oggy','Jack'];

const newCartoon = myCartoon.map((cartoon, index) => {
    return {
        cartoonName: cartoon,
        cartoonIndex: index
    }
})
console.log(newCartoon);


// -------------------------------------------------------------------------------------


// 2. filter() Function :

// It creats a new array with elements that passes the test.

const myAge = [11,16,22,34,9,56,13];

const newAge = myAge.filter((age) => {
    return age >= 18});

console.log(newAge);


// --------------------------------------------------------------------------------------


// 3. find() Function :

const myPokemon = ['Pikachu','Charmander','Bulbasaur','Squirtle'];

const newPokemon = myPokemon.find((pokemon) => pokemon === 'Charizard');

console.log(newPokemon);



// --------------------------------------------------------------------------------------


// 4. reduce() Function :

// It reduces the array to a single value.

// Example : 1

// const myNumbers = [7,1,2,0,3];

// const newNumbers = myNumbers.reduce((a1, a2) => {
//     return a1 + a2;
// });
// console.log(newNumbers);


// Example : 2

const myNumbers = [3,8,1,0,2,4];

const numb_func = (a1, a2) => {
    return a1 + a2;
}
let myResult = myNumbers.reduce(numb_func);

console.log(myResult);