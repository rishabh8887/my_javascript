// arrow function and this keyword


// this is used for current context -- this refers to the current context --context simply means values 

const user = {
    username:"Rishabh",
    price:"999",
    welcomeMessage:function(){
        //console.log(`${this.username},welcome to website`)
    }
}
user.welcomeMessage()




//function chai(){
//   let username ="hitesh"
//console.log(this)
//}
//chai()


//ArrowFunction
const chai = ()=>{
    let username ="Rishabh"
    console.log(this)
}

//chai()

// basic syntax of arrow function 
const addTwoNum= (num1,num2) => {
 return num1+num2
}
//console.log(addTwoNum(3,4))

//now we will talk about implicit return

const addThree = (num1,num2,num3) =>( num1+num2+num3 ) // it is in the same line then we dont need to write the return keyword here we directly perform the action
console.log(addThree(9,8,7))