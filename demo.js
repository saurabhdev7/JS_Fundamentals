// function myFunc(num1, num2, ...items){
//     let total = 0;
//     for (let i =0; i<items.length; i++){
//         total = total + items[i];
// }
// }
// let result = myFunc(1,2,3,4,5,6);
// console.log(result);



const user = {
    name:'Saurabh',

    city: 'Kolkata',
}


const address = {
    street: 'Rabindra Sarani',
}

const newUser = {...user, ...address};
console.log(newUser);