class User {
    constructor(username) {
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.passsword = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@gmail.com","234567")
chai.addCourse()
const masalaChai = new User("masalaChai")
masalaChai.logMe()