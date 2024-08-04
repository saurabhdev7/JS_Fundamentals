/*

const users = [
    {userId : 1, Name : 'Saurabh', Location : 'Kolkata'},
    {userId : 2, Name : 'Bipin', Location : 'Kolkata'},
    {userId : 3, Name : 'Subhajit', Location : 'Kolkata'},

]
console.log(users);

Iteration :

for(let user of users){
    console.log(user.Name)
}

*/

// Nested destructuring :


const users = [
    {userId : 1, Name : 'Saurabh', Location : 'Kolkata'},
    {userId : 2, Name : 'Bipin', Location : 'Delhi'},
    {userId : 3, Name : 'Subhajit', Location : 'Bangalore'},

]

// const [person1, person2, person3 ] = users;
// console.log(person1);

const [{Name} , , {Location} ] = users;
console.log(Name)
console.log(Location);

// const [ {Name : Name1} , , {Location : Location3} ] = users;
// console.log(Name1);
// console.log(Location3);

console.log(Object.keys(users[0]));    // Object.keys() returns an array of a given object's.
