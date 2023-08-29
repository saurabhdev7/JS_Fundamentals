// map() Function

const myArray = [2,5,8,9,11];

const newArray = myArray.map((num) => num**2);

console.log(newArray);




// filter() Function :

const myAge = [11,16,22,34,9,56,13];

const newAge = myAge.filter((age) => age >= 18);

console.log(newAge);




// find() Function :

const myPokemon = ['Pikachu','Charmander','Bulbasaur','Squirtle'];

const newPokemon = myPokemon.find((pokemon) => pokemon === 'Charizard');

console.log(newPokemon);




// reduce() Function :

const myNumbers = [7,1,2,0,3];

const newNumbers = myNumbers.reduce((acc,curr) => acc + curr);

console.log(newNumbers);