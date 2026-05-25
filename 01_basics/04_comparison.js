//console.log(2 > 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

//eual and comparison work differently ...comparisonn convert null to number 
//treating null as 0 . That's why null >= 0 is true and null > 0 is false

console.log(undefined == 0);// false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === strict check means values and data type both check

console.log("2" == 2);//true
console.log("2" === 2);//false

