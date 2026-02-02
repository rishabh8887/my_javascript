// here we talk about singleton and literals
const tinderUser = new Object()
tinderUser.id="123"
tinderUser.name="prince"
tinderUser.isLoggedIn=false

console.log(tinderUser)


const regularUser={
    email:"some@gmail.com",
    fullname:{
        fisrtName:"rishabh",
        lastName:"bajpai"
    }
}
console.log(regularUser.fullname.fisrtName)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)

const obj3 = {...obj1,...obj2}
console.log(obj3)

// when value comes from database then it will come in the form of array only

const users = [
    {},
    {},
    {},
    {}
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


//destructuring - destructuring is in both arrays and in the objects.

const course ={
    courseName:"js in hindi",
    price:"999",
    instructor:"hitesh"
}
//course.instructor

//this is object destructuring 
const {instructor:techer} =course
console.log(techer);

// jab apna kaam kisi aur ke sar pe daal dena hai use hi API bolte hai 
//json structure 
//in json structure both keys and values are string


// {
//     "name":"rishabh",
//     "courseName":"js in hindi",
//     "price":"free"
// }