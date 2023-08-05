let array1 = ['Saurabh', 'Bipin', 'Navin', 'Subhajit'];
// let array2 = array1.slice(0, 2);      // cloning of array1 to array2 using slice method

// let array2 = [... array1, 'Sumit', 'Shubham'];      // cloning of array1 to array2 using spread operator

// let array2 = array1.slice(0).concat(['Sumit', 'Shubham']);

console.log(array2);

array1.push('Ishan');

console.log(array1);
console.log(array2);
console.log(array1 === array2) // false 