class User{
    constructor(username){
        this.username=username

    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
// static stops the accessibility of the method
    static createId(){
        return `123`
    }
}

const rishabh = new User("rishabh")
console.log(rishabh.createId());
