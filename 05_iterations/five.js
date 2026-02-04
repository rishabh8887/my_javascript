// for each loop 
const coding =["js","ruby","java","python","go"]

// for each is the inbuilt loop in arrays we can use it by writing the array name and .
// example  for array arr
// arr.forEach

// forEach loop used callback fucntion and callback function donot have name 

// coding.forEach(function (item){
//     console.log(item);
    
// })

// coding.forEach((item)=>{
// console.log(item);

// })


// function print(item){
// console.log(item);

// }
// coding.forEach(print)

// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);

// })

const myCoding =[
    {
        'languageName':"javascript",
        'languageFileName':"js"
    },
    {
        'languageName':"java",
        'languageFileName':"java"
    },
    {
        'languageName':"python",
        'languageFileName':"py"
    }
]

myCoding.forEach((item)=>{
 console.log(item.languageName)
})