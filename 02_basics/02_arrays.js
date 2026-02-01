const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["Superman","flash","batman"]

//pushing one array into other array will work like in first array direclty new array stored as value with their paranthesis its like one value of the array is another array


// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])


// concatenate work on the values specifically it will add values of both array 

const allheros = marvelHeros.concat(dcHeros);
console.log(allheros);

// ...(dot dot dot) it is the spread operator 
const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//it will make everything into one array 
const realAnotherArray=anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Rishabh"))
console.log(Array.from("rishabh"))

let arr1 = 100;
let arr2 = 200;
let arr3 = 300;

console.log(Array.of(arr1,arr2,arr3))