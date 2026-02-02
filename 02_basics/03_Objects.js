// 1 literal 2 cunstructor 3 singleton (when object is made up of constructor then it only made in singleton)

//object literals 
// const JsUser ={
//  name:"rishabh",
//  age:22,
//  location:"gurugram",
//  email:"rb@gmail.com",
// "college":"sr"  // if any key value is defined in this way then it cannot be accessed using .(dot) it only can be accesed through [](big brackets )
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["college"])
//Object.create  // constructor method

// interview question take a symbol in the object and print it 
 const  mySymb=Symbol("key_1")


 //if we have to use mySymb(symbol) in the object then we have to write this mySymb in square brackets as [mySymb]
 
 
 const JsUser ={
 name:"rishabh",
 [mySymb]:"myKey1",
 age:22,
 location:"gurugram",
 email:"rb@gmail.com",
"college":"sr"  // if any key value is defined in this way then it cannot be accessed using .(dot) it only can be accesed through [](big brackets )
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["college"])
// console.log(JsUser[mySymb])


JsUser.email="rishbh@gmail.com";
console.log(JsUser)

JsUser.greeting=function(){
    console.log(`hello i am greeting function,${this.name}`)
}

console.log(JsUser.greeting())