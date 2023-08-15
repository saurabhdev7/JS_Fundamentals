// Computed properties : Computed properties are used when we want to use a variable as a key in an object. 

// const key1 = 'objkey1';
// const key2 = 'objkey2';

// const value1 = 'objValue1';
// const value2 = 'objValue2';


// const obj = {
//     [key1]: value1,
//     [key2]: value2
// }
// console.log(obj);



// ---------------------------- Examples -----------------------------


let company = 'brand';

let car ={
    [company] : 'BMW',
    model : 'X5',
    color : 'black',
    year : 2020
}



console.log(car);