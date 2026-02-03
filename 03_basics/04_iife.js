// Immediately Invoked Function (IIFE)

// when we write two or more then two iife then we must have to end each iife by using ;
(function dbConnection(){
    // this is named iife
    console.log("databse connected")
})();

//()()-- iife used for global scope  variable pollution 
// in this we use first parenthesis for the declaration and second patrenthesis for the execution 

((name)=>{// here we also have parameters 
    // this is unnamed iife 
    console.log(`db connected to ${name}`)
}

)("rishabh")