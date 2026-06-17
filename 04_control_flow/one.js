// if
// const isUserLoggedIn = true
const temperature = 50

// if ( temperature === 41 ) {
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     const power = "fly" // var use krenge toh power ko bahar bhi use kr skte hai
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
    
// }

const isUserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(isUserLoggedIn && debitCard && 2 == 3){
    console.log("allow to buy course");
}

if(LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("user logged in");
}

