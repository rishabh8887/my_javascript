//ES6
class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.passsword=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new User("rishabh","rb@mail.com","12345")
console.log(chai.encryptPassword());
