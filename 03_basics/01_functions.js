
function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){
    // let result = number1 + number2 ;
    // return result
    return number1 + number2
}

// addTwoNumbers(3, 4) // 7
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, 'a') // 3a
// addTwoNumbers(3, null) // 3
// addTwoNumbers(3, undefined) // undefined

const result = addTwoNumbers(3, 5)

// console.log("result :", result);

function loginUserMessage(username = "defaultUser") {
    if(!username){  // same as username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deepak")) // Deepak just logged in
// console.log(loginUserMessage()) // undefined just logged in (without if-else)

function calculateCartPrice(...num1) { // here it is rest operator not spread
    return num1
}
function calculateCartPrice2(val1, val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); //gives array of arguments->[200,400,500,2000]
// console.log(calculateCartPrice2(200, 400, 500, 2000)); // here ans will be [500, 2000] cuz val1 = 200 , val2 = 400, and rest is nums

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(
        `username is ${anyobject.username} and price is ${anyobject.price}`
    );
}

// handleObject(user)

handleObject({
    username : "sam",
    price : 200
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

