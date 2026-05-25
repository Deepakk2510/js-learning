// datatypes are officially categorised on the basis how it is
//stored on memory and are accessed

//Primitive - call by value hote hai, copy krke diya jata hai,changes copy mein hote hai

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//JS dynamically typed - datatypes are defined at runtime
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // unique hota hai
const anotherId = Symbol('123') // alag hoga

console.log(id === anotherId);

const bigNumber = 345673897292793862757353757n



//Reference/ non- primitive 

//Array, Objects, Functions

const heroes = [ "shaktimaan", "naagraj" , "doga"]
let myObj = {
    name : "deepak",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

//how to know the datatype

console.log(typeof bigNumber); //bigint

console.log(typeof outsideTemp); // null ka bhi object aata hai
console.log(typeof heroes); // object
console.log(typeof myFunction); // function
console.log(typeof id); // symbol ka symbol aata hai


