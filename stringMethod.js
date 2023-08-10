/*
let word = "asdfghjklpoiuytrewq";
let z = word.length
console.log(word[z-1]);


let naam = "prince charles victor louis de broglie";
console.log(naam.length);
*/

let firstName = '  Saurabh  '
console.log(firstName.length);


let newString = firstName.trim()   // trim() removes the extra spaces from the string
console.log(newString);
console.log(newString.length);


console.log(newString.toUpperCase());    // toUpperCase() converts the string to uppercase

console.log(newString.toLowerCase());    // toLowerCase() converts the string to lowercase



let myFav1 = 'Javascript'
let myFav2 = myFav1.slice(0,4)     // slice() extracts a part of a string and returns the extracted part in a new string.
console.log(myFav2);



console.log(myFav1.indexOf('s'));     // indexOf() returns the index of (the position of) the first occurrence of a specified text in a string.

let favColor = 'red green blue yellow';
let newArr = favColor.split(' ')      // split() converts string to array
console.log(newArr);



let newStr = 'Saurabh';
newStr[1] = 'o';     // strings are immutable in javascript so we can't change the value of a string at a particular index like this. 
console.log(newStr);
