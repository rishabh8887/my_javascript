//object literal
// const user = {
//     username :"rishabh",
//     loginCount : 8,
//     signedIn:true,
//     getuserDetails:function(){
//         //console.log(`username:${this.username}`)
//         //console.log(this);
        
//     }
// }

// console.log(user.getuserDetails());
// console.log(this);

// *******constructor function**********

// const promiseOne = new Promise()
// const date = new Data()
// const arr = new Array()

function User2(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    //return this
}

const userOne = new User2("rishabh",12,true)
const userTwo = new User2("bajpai",11,false)
console.log(userOne);
console.log(userTwo);


