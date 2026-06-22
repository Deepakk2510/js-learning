class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const deepak = new User("deepak")
// console.log(deepak.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.emai = email
    }
}

const iphone = new Teacher("iphone", "iphone.com")
iphone.logMe()
console.log(iphone.createId())
