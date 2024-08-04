// Promises :

// A promise in Javascript is similar to a promise in real life.

// When we make a promise in real life, it is a guarantee that we are going to do something in the future. Because promises can only be made for the future.

// A promise is an object. There are three states of a promise:

// Pending : The initial state of a promise before the promise succeeds or fails.
// Resolved : Completed Promise
// Rejected : Failed Promise



const bucket = ['vegetables', 'rice', 'salt', 'chips'];

const myPromise = new Promise((resolve, reject) => {
if (bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt'))
    {
        resolve('Fried Rice');
    } else {
        reject('Fried Rice Not Available');
    }
})


// produce promise

// consume promise


myPromise.then((message)=>{
    // jab promise resolve hoga toh yeh chalega
    console.log('Lets eat', message);
},
    // jab promise reject hoga toh yeh chalega
    (error)=>{
    console.log('None', error);
})

