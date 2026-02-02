// 1 literal 2 cunstructor 3 singleton (when object is made up of constructor then it only made in singleton)

//object literals 
// const JsUser ={
//  name:"rishabh",
//  age:22,
//  location:"gurugram",
//  email:"rb@gmail.com",
// "college":"sr"  // if any key value is defined in this way then it cannot be accessed using .(dot) it only can be accesed through [](big brackets )
// }

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["college"])
//Object.create  // constructor method

// interview question take a symbol in the object and print it 
 const  mySymb=Symbol("key_1")
 //if we have to use mySymb
 const JsUser ={
 name:"rishabh",
 age:22,
 location:"gurugram",
 email:"rb@gmail.com",
"college":"sr"  // if any key value is defined in this way then it cannot be accessed using .(dot) it only can be accesed through [](big brackets )
}