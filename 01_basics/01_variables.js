const accountId = 144553
let acccountEmail = "deepak@gmail.com" 
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState; // undefined/not defined yet 

// accountId = 2 //not allowed

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

acccountEmail = "dk@gmail.com"
accountPassword = "121212"
accountCity = "Lucknow"

// console.log(acccountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId,acccountEmail,accountPassword,accountCity,accountState])


