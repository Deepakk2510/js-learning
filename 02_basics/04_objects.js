//const tinderUser = new Object() //singleton

const tinderUser = {} //non singleton

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "deepak",
            lastname : "kanojiya"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj4 = {5 : "e", 6 : "f"}

//const obj3 = {obj1, obj2} //array wali problem ayegi

//const obj3 = Object.assign({}, obj1, obj2, obj4)//{} is gud practice..gives output in new string 
//bina {} k obj1 modify ho jayega

//spread technique
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id : 1,
        email: "a@gmail.com"
    },
    {
        id : 1,
        email: "a@gmail.com"
    },
    {
        id : 1,
        email: "a@gmail.com"
    },
    {
        id : 1,
        email: "a@gmail.com"
    },
]

//to access array objects
users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));// [ 'id', 'name', 'isLoggedin' ]
//console.log(Object.values(tinderUser));// [ '123abc', 'sammy', false ]
//console.log(Object.entries(tinderUser));// [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedin', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedin'));//true

//------------------------------------------------

const course = {
    coursename : " js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

//object de structure
// const {courseInstructor} = course // pura nhi likhna padega ab ..'course.courseInstructor' ki jgh 'courseInstructor' only
const {courseInstructor : instructor } = course // 'courseInstructor' ki jgh ab 'instructor' use kr skte hai

// console.log(courseInstructor);
console.log(instructor);

//react hai
//object destructor
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")


//APIs-> apna kaam kisi aur k upar daalna

//JSON ->key and value both strings hongi
//json is a object with no name
//neeche error nhi hai proper hai
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

//sometimes API as arrays
[
    {},
    {},
    {}
]

 