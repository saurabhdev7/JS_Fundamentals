// Promises :

// A promise in Javascript is similar to a promise in real life.

// When we make a promise in real life, it is a guarantee that we are going to do something in the future. Because promises can only be made for the future.

// A promise is an object. There are three states of a promise:

// Pending : The initial state of a promise before the promise succeeds or fails.
// Resolved : Completed Promise
// Rejected : Failed Promise




const myPromise = new Promise((resolve, reject) => {
    const a = 2; b = 2;
    const c = a + b;
    if (c===4){
        resolve('Thats Correct');
    } else {
        reject('Oh no!');
    }
});

myPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})