const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal : ${currVal}`);
//     return acc + currVal
// }, 1)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0) // 0 is initial value of acc
                                                             // can use any operator instead of '+'
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetoPay = shoppingCart.reduce((acc, item) => acc + item.price  , 0)
console.log(pricetoPay);
