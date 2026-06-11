const name = "deepak"
const repoCount = 50

//console.log(name + repoCount + " value");

//console.log(`Hello my  name is ${name} and my repo count is ${repoCount}`);

//gives methods and prototypes to work with string
const gameName = new String('deepak-dk-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-8, 4)
//console.log(anotherString);

const newStringOne = "    deepak    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "httpa://deepak.com/deepak%20kanojiya"

console.log(url.replace('%20', '-'))
console.log(url.includes('deepak'));

console.log(gameName.split('-'));



