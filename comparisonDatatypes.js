// console.log(NaN === NaN);    // false

// console.log(isNaN(NaN));    // true

// console.log(isNaN(10));    // false

// console.log(isNaN("10"));    // false

console.log(null == undefined);    // true

console.log(null === undefined);    // false

console.log(null == 0);    // false

console.log(null > 0);    // false

console.log(null >= 0);    // true


// Reason is that an equality check == and comparisons > < >= <= work differently. Comparison converts null to a number, treating it as 0. That’s why (null >= 0) is true and (null > 0) is false.


// Reason for this is that null is converted to 0 for comparison and undefined is converted to NaN.


// The equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (null == undefined) is true.
