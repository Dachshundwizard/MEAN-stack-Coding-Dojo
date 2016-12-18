console.log('Starting app');
// This takes two arguments. The first one is a function. (Callback function, going to get
// called back after a certain amount of time. And our second parameter is the time.
setTimeout(() => { // Ths is an example of an asynchronous callback.
    console.log('Inside of callback');
}, 2000);

setTimeout(()=> {
    console.log('Second callback works!');
}, 0);

console.log('Finishing up');
