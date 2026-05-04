let score = "deepak"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//type giving number
console.log(valueInNumber);// value here is NaN i.e. not a number kyuki score pure number nhi tha
//sirf 33 likha hota toh ans console.log(valueInNumber); iska 33 aata

//"33" -> 33
//"33abc" -> NaN
//true ->1; false ->0
//null -> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//for boolean
//1 -> true; 0 -> false
//""-> false
//"deepak" -> true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);




