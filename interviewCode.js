// 1.

// console.log(printName());

var printName = function printName(){
    return 'Saurabh'
}
// Output : Error --  as printName is not a function. It is a variable which is assigned a function. So, it will not be hoisted.



// 2.

const obj = {a:1, b:2, c:{d: 3}};

const obj2 = {...obj};

obj2.c.d = 5;
// console.log(obj.c.d)      // 5
// console.log(obj2.c.d);      // 5



// 3. 

let val1 = 1 + 2 + 'Saurabh';
let val2 = 'Saurabh' + 1 + 2;

// console.log(val1);      // 3Saurabh
// console.log(val2);      // Saurabh12