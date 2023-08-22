//------------------------------ Synchronous programming : ----------------------------------


// line by line execution of code i.e, one line of code at a time
// blocking code
// single threaded



// console.log('script start');

// for (let i = 2; i<10000; i++){
//     console.log('inside script');
// }
// console.log('script end');



//---------------------------------- Asynchronous programming : ----------------------------------


// multi-thread, which means operations or programs can run in parallel.

// Async is non-blocking, which means it will send multiple requests to a server without waiting for the response of the previous request.

// Async is fast, as the CPU does not wait for a response and moves to another task.

// Async is not sequential, which means it does not execute the code line by line. It executes the code line by line but not in the same order as the code is written.


// Syntax of setTimeout() method:
// setTimeout(function, milliseconds, param1, param2, ...) 




console.log('script start');

for (let i = 0; i<10000; i++){
    console.log('inside script');
}
console.log('script end');


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log('script start');

setTimeout(() => {
    console.log('Inside setTimeout');
}, 0);

for(let i = 1; i<100; i++){
    console.log('*');
}
console.log('script end');