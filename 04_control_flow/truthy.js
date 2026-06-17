const userEmail = []

if(userEmail){
    console.log("got user email");
} else {
    console.log("don't have user email");
}

// falsy values

// false, 0, -0, BigInt-> 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ",empty array-> [],empty object-> {},empty func-> function(){} 

// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ){ // Object.keys gives array of keys in emptyObj which is here []
    console.log("object is empty");
}

// false == 0  // true
// false == '' // true
// 0 == ''     // true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// agar null ya undefined ayega toh (??) iske baad wali value jayegi ...
// nhi toh defaut value (??) iske phle wali jayegi

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

