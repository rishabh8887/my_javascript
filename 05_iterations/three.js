// fro of 

// these array specific loop 
//["","","","",""] 
//[{},{},{},{}]

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
    
}

const greetings ="hello world"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`)
}

//maps
const map = new Map()
map.set("IN","India")
map.set("USA","United States Of America")
map.set("Fr","France")
map.set("IN","India")

//console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const obj of myObj) {
//  console.log(obj)   
// }

// onjects cannot be iterated by the for of loop.