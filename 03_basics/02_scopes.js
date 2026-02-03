// let a =10;
// var b=20
// const c= 30
// console.l

// here we only discussed about the local and global scope and how scope of let var const differ from each other 

//nested scopes
// closures in javascript 

function one(){
    const username ="Rishabh"
    function two(){
        const website ="YouTube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()


//******************************************************************************** */
console.log(addOne(5))

function addOne(num){
    return num+1
}
// here if we use addTwo before initializaton then it will give error 
//console.log(addTwo(5))


const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))
