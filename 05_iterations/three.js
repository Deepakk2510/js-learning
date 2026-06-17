// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"

for (const greet of greetings) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
map.set('IN',"India")//no change due to unique values in map

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':', value)
}

const myObject = {
    game1 : 'NFS',
    game2 : 'COC'
}
// myObject is not iterable

// for (const [key,value] of myObject) {
//     console.log(key, ':', value)
// }

