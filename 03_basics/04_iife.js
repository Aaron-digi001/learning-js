// Immediately Invoked Function Expressions (IIFE)
// we use this to prevent our code from pollution/contimmination from global scope ....


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
