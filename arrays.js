// Array : Array is used to store multiple values in a single variable. It is like a special variable which can hold more than one value at a time. They are ordered collection of items. Each item inside an array is called an element. Each element has a unique index number which represents its position in the array. 

// Array can be created using two ways:
// 1. Using array literal
// 2. Using array constructor (new keyword)

// Ways to create an array :

// 1. Using array literal : 
// Syntax : const arrayName = [value1, value2, value3, ...]

// 2. Using array constructor (new keyword) :
// Syntax : const arrayName = new Array(value1, value2, value3, ...)

const student = ['Saurabh', 'Bipin', 'Navin', 'Subhajit', 'Ishan']
console.log(student);


const students = [
    {
        Name: "Saurabh",
        Age: 25,
        RollNo: 1,
        Marks: 95
    },

    {
        Name: "Navin",
        Age: 26,
        RollNo: 2,
        Marks: 96
    },

    {
        Name: "Bipin",
        Age: 27,
        RollNo: 3,
        Marks: 98
    }
]
console.log(students);

console.log(students[0].Name);

students.pop();
console.log(students);



students.push({Name: "Ishan",
Age: 12,
RollNo: 8,
Marks: 92
});

console.log(students);

