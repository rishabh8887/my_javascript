//for
array = [2,4,5,6,7,8,9]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}

array.forEach(element => {
    
});


// for better control on loops we have two keywords 
// break and continue 

// for(let index = 1; index <= 20;index++){
//     if(index == 5){
//         console.log(`5 dtected`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for(let index = 1; index <= 20;index++){
    if(index == 5){
        console.log(`5 dtected`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}

// break directly breaks the statement 
// while give permisson for one time only 
//like ek baar galti ke liye maafi 