// //Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleString())

// let myCurrentDate = new Date(2024,0,23)
// console.log(myCurrentDate.toDateString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(Math.round(Date.now()/1000))
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('defualt',{ 
    weekday:"narrow",
})