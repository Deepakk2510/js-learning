//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) //start mein add krta hai value
myArr.shift() //start wali remove kr deta hai ya fir sab element left shift ek posn 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);//sab elements ko join krke string mein bna deta hai

// slice,splice

console.log("Original :", myArr);

const myn1 = myArr.slice(1,3)
console.log("with slice:", myn1);//original mein change nhi krta

console.log("again original : ", myArr);//as it is->no change in original

const myn2 = myArr.splice(1,3)
console.log("with splice :", myArr);// original - (1,3) wala part

console.log("again original:", myn2);//original array manipulate -> (1,3)
