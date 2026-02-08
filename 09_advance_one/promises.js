//in most of the cases we consume the already build promises
// creation of promise
const promiseOne = new Promise((resolve,reject)=>{
    // do an async task
    // DB task
    // Cryptography , network

    setTimeout(()=>{
        console.log(`async task is complete`);
        resolve()
    },1000)

});
// here the function in promise.then automatically recieve an argument which return the value of promise
promiseOne.then(()=>{
console.log(`promise consumed`);
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`async task 2`);
        resolve()
        
    },1000)
}).then(()=>{
    console.log(`async2 resolved`);
    
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"rishabh",email:"rb@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
console.log(user);

})

const promiseFour = new  Promise((resolve,reject)=>{
 setTimeout(()=>{
    let error = true
    if(!error){
        resolve({username:"Rishabh Bajpai",password:"1345"})
    }else{
        reject('ERROR-something went wrong')
    }
 },1000)
})

promiseFour
.then((user)=>{
return user.username
})
.then((userName)=>{
console.log(userName);

})
.catch((err)=>{
    console.log(err);
    
})
.finally(()=>{
console.log("promise is either resolved or rejected");

})

const promiseFive = new Promise((resolve,reject)=>{
     setTimeout(()=>{
    let error = false
    if(!error){
        resolve({username:"Kushagra",password:"145"})
    }else{
        reject('JS went wrong')
    }
 },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()

// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log(`E:${error}`);
    
//    }
   
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))
