// Primitive datatypes vs Reference datatypes :

// Primitive types are stored in stack and reference types are stored in heap.
// Primitive types are immutable and reference types are mutable.

/*
Explanation for primitive types :

When we declare a primitive data type in JavaScript, it is stored on a stack.
A stack is a simple data structure that the computer uses to store and retrieve data quickly.

A primitive data type on the stack is identified by the variable name we used for declaration in our program. With each primitive data type we create, data is added to the stack.

Suppose we declare a variable num1, and give it a value of 14. Again we create another variable, num2, and assign it the same value of 14. So both variables have the same value.

What happens on the stack is that, the computer creates room for num1 and stores its assigned value on the stack. When num2 is created, the computer again creates room, and stores 14 on the stack. It does not matter that both variables are assigned the same value.

Since num1 and num2 were stored differently on the stack, updating one of them will not affect the other.

*/

// Example :

let num1 = 14;
let num2 = num1;
console.log(`value of num1 is ${num1}`);
console.log(`value of num2 is ${num2}`);

num1++;

console.log(`value of num1 is ${num1}`);
console.log(`value of num2 is ${num2}`);


/*
Explanation for reference types :

Reference types are stored in the heap. The heap is a much larger space in memory, and it is used to store more complex objects.

When we declare a reference type, the variable name is stored on the stack, but the value is stored on the heap. The value is stored as a pointer to a location in memory. This pointer is the address of the (objects, arrays, etc) location in memory.

They are stored as a reference to a location in memory. The value of a reference type can be updated, because it is stored in the heap. So when we update the value, we are updating the value in the heap, and not the value on the stack. This is why updating the value of a reference type affects all variables in the memory. This is also why reference types are mutable.

*/

// Example of reference types :

let array1 = ['Saurabh', 'Bipin', 'Subhajit'];
let array2 = array1;

console.log(`value of array1 is ${array1}`);
console.log(`value of array2 is ${array2}`);

array1.push('Navin');

console.log(`value of array1 is ${array1}`);
console.log(`value of array2 is ${array2}`);
