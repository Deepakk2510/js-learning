// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB connected`);
})(); // here semicolon must hai 

// why use iife? ->global scope ke variable k pollution se bachne k liye 

// ()()  phla parentheses description , dusra call/execution  ke liye

((name) => {
    console.log(`DB cnnected two ${name}`);
})('hitesh')