//singleton - koi bhi constructor se bnayenge object toh apne tareeke ka ek hi bnega
//literal se bnayenge toh singleton nhi bnega

//singleton
// Object.create


//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Deepak",      //key : value //key ->string hoti hai
    "fullname" : "Deepak Kanojiya",  //a way to write
    [mySym] : "mykey1", //to represent symbol use [ ]
    age : 18,
    location : "jaipur",
    email : "dk@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon", "Sat"]
}

//how to access 
// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser.fullname);
// console.log(jsUser[mySym]);

jsUser.email =  "deepak@123"
//console.log(jsUser.email)

//to avoid changes use->freeze
//Object.freeze(jsUser)
jsUser.email =  "deepak@123456"
//console.log(jsUser)

//to add functions
jsUser.greeting = function(){
    console.log("hello jsUser");
}
jsUser.greeting2 = function(){
    console.log(`hello jsUser, ${this.name} `);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());




