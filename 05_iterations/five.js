const coding = ["js", "ruby", "java", "python", "cpp"]

// foreach ke braces k andar likhne wale function ko callback function khte hai
// coding.forEach( function (item) {   // item -> parmeter
//     console.log(item);
// } )


// coding.forEach( (item) => {console.log(item)} )

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "c++",
        languageFilename: "cpp"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})