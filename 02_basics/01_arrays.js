// //Array
const myArr =[0,1,2,3,4,5,true,"rishabh"]
// const myHeroes = ["shaktiman","naagraj"]
// const myArr2 = new Array(1,2,3,1,2,3)

// console.log(myArr[1]);

// //Array methods

// myArr.push(6);
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(45)
// myArr.shift()

// console.log(myArr)

const newArr= myArr.join()
console.log(newArr);
// console.log(typeof newArr);

//slice,splice methods 

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 =myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2)