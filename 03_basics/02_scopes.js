// var -> global scope , let and const -> local scope // let is preferred for block scope
// d = 40 -> global scope

var c = 300
let a = 100

if (true) {
    //console.log(a) //error->first used then initialised..but if neeche wala (a = 10) not present then ans->100
    let a = 10
    const b = 20
    var c = 30 // 300 wale ko overwrite kr dega
    // console.log(a); // 10

}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); error
    
    two()
}

// one()

if (true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ------------------------- interesting ------------------------------------------

console.log(add1(10)) // no error in technique one

// 1st technique
function add1(num) {
    return num + 1
}

add1(5)

// add2(4) ->gives error due to use before declaration

//2nd technique also knows as expression
const add2 = function(num){
    return num + 2
}

add2(5)

// 1st technique allows use before declaration, 2nd does not allow