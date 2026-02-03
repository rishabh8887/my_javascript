// functions

// simple means that we are making the package of the program and then after that we can use it simply anywhere easily 

function syMyName(){
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("B")
    console.log("H")
}
//syMyName();

function addTwoNumbers(number1,number2){
    // let result = number1+number2;
    // return result

    return number1+number2
     
}
const result = addTwoNumbers(9,8);
//console.log("Result :",result)

function logInUserMessage(username){
    if(!username){
        console.log("please enter a username ")
        return 
    }
    return `${username}just logged in`
}
//console.log(logInUserMessage(""))

// shopping cart -- multiple parameter for unknown limit of addings 

// for multipe parameters we use rest operator which is ...(dot dot dot)
//one more thig spread operator and rest operator both are represented as ... but usecase defines that which term is appropriate .
function calculateCartPrice(...num1){
return num1;
}
//console.log(calculateCartPrice(200,32,43,65))

//now we are looking how to pass and use object in the functions
const user={
username:"rishabh",
price:"9999"
}
function handleObject(anyObject){
    console.log(`usernaem is${anyObject.username} and price is${anyObject.prices}`)
}
handleObject(user)// object can be directly passed in the function


// now we are goint to understand how arrays are passed and hendeled in a function
const myNewArray=[200,300,400,500]
function handelArray(anyArray){
    return anyArray[3]
}
console.log(handelArray(myNewArray))