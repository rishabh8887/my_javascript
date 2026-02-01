const name = "rishabh"
const repoCount = 50
//console.log(name+repoCount+"value");

/*
using backticks - string interpolatoin it have placeholders we can directly inject the values using dollar sign 
*/

console.log(`hello my name is ${name} and my repocounut is ${repoCount} `);

const gameName = new String('rishabh'); //declared by creating new object 

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));
console.log(gameName.length);

const newString = gameName.slice(-6,5);
console.log(newString);