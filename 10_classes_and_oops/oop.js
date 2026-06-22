const user = {
    username: "deepak",
    loginCount: 6,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    
    return this
}

const userOne = new User("deepak", 10, true)
const userTwo = new User("chai aur code", 12, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);


// notes about new keyword: steps are:
// 1. jaise hi "new" keyword use krenge toh ek empty object create hota hai - jise instance bola jata h
// 2. ek constructor function call hota hai "new" keyword ke karad - yh sare arguments ko pack krke deta hai 
// 3. this keyword mein sare arguments inject ho jate hai
// 4. function k andar humko mil jaate hai