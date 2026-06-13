const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)//marvel mein dc array ko as a single element add
// console.log(marvel);
// console.log(marvel[3][1]);

//marvel.concat(dc)
//console.log(marvel);// same as push

const allHeroes = marvel.concat(dc)//now all heroes separately
//console.log(allHeroes);

//spread operator
const allNewHeroes = [...marvel,...dc] //same task as line 11
//console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//
const realAnotherArray = anotherArray.flat(Infinity)//nesting hata dega aur output dega as [1,2,3,4,5,6,7,6,7,4,5]
console.log(realAnotherArray);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))//from -> parameter array bna dega ['h','i','t','e','s','h']
console.log(Array.from({name: "hitesh"}))//interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //array bana dega