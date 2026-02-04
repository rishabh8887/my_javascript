const userEmamil = "R@rishabh.ai" 

// here it automatically check the value if userEmail have value then if statement will execute and if there is empty string in the userEmail then else statement will execute automatically .

if(userEmamil){
    console.log(`got user email${userEmamil}`);
    
}else{
    console.log(`Dontn have user email`);
    
}

// falsy values 

//false,0,-0,Bigint 0n,null,undefined,NaN,""

// accept these values all are the truthy values 


//truthy

// "0",'false'," ",[],{},function(){}

// ??
// Nullish Coalsecing Operator (??): null undefined 
let val1;
//val1= 5??10
//val1 = null ?? 10
//val1 = undefined??15
//val1 = null?? 10 ?? 20


//console.log(val1);


// Terniary operator 
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log(`less than 80,current price is  ${iceTeaPrice}`):console.log(`more than 80`)