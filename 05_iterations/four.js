const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key)
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key) // gives output-> 0 1 2 3 4 
    // console.log(programming[key]) // gives actual ans
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
map.set('IN',"India")

// map iteration is not possible here
// for (const key in map) {
//     console.log(key)
// }

