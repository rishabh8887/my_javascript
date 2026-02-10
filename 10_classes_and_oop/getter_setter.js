class User {
    constructor(email,password) {
        this.email =email;
        this.password=password;
    }
get email(){
    return this._email.toUpperCase()
}
set email(val){
    this._email = val
}

    get password(){
        //return this._password.toUpperCase()
        return `${this._password}001a`
    }
    set password(value){
        this._password = value
    }


}

const hitesh = new User("rishabh@gmail.com","asdfgh")
console.log(hitesh.password);
console.log(hitesh.email);



//for more control on some specific fields we use getters and setters
// for customisation on the provided data 
// if we used getter then we have to use setter also otherwise the code will not run 


// getters and setters can be implemented in functios also in objects 
