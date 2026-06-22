// let myName = "deepak     "
// let mychannel = "chai     "

// low IQ
// console.log(myName.trim().length);

// what we want ->
// console.log(myName.trueLength)


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
    
}

// heroPower.hitesh()
// myHeros.hitesh()

// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const Teachersupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: Teachersupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(Teachersupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"deepak".trueLength()