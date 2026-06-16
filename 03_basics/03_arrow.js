const user = {
    username : "hitesh",
    price : 999,
    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website`);// this refers to current context
        // console.log(this);
        
    }

}

// user.welcomeMsg()
// user.username = "deepak" // context change kr diya
// user.welcomeMsg()

// browser mein current context window object hota tha pehle k samay mein

// console.log(this);// empty context no object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// chai() // with this gives lots of values but with this.username gives undefined


// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// arrow function 

const chai = () => {
    let username = "hitesh"
    console.log(this);
    
}

// chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// implicit return mtlb bina return keyword ke
// const addtwo = (num1,num2) => num1 + num2

// const addtwo = (num1, num2) => ( num1 + num2 ) // curly braces mein return likhna pdta hai () isme nhi

// to return objects ->need to wrap in parantheses
const addtwo = (num1, num2) => ( {username : "hitesh"} ) 

console.log(addtwo(3,4))

const myArray  = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})




