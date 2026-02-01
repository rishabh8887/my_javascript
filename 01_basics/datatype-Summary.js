//Primitive data type - 7 categories
/**
 * 1 string
 * 2 nunmber
 * 3 boolean
 * 4 null
 * 5 undefined
 * 6 Symbol(used to make something unique)
 * 7 BigInt(scientific large integer values)
 */

// Reference type / Non-primitive\
/**
 * ARRAY
 * OBJECTS
 * FUNCTIONS
 */

// Javascript is a dynamically type language means we do not need to define the datatype secifically.

//symbol

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const heros =["Shaktiman","naagraj","doga"]

let myObj = {
    name: "rishabh",
    age: 22,

}

const myFunction = function(){
console.log("first function");
}

console.log(typeof myFunction);


//*************  MEMORY STRUCTURE IN JAVASCRIPT ***********
// STACK memory used in PRIMITIVE DATATYPE- give the copy
// HEAP memory used in NON-PRIMITIVE/RERFERENCE TYPE - give the reference 
let myYoutubeName = "rishabhyoutube"