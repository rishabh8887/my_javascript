// let myName = "rishabh"
// console.log(myName.truelength);

let myHeros =["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spider:"sling",
    getSpiderPower:function(){
        console.log(`spider power is${this.spider}`);
        
    }
}

Object.prototype.rishabh = function(){
    console.log(`rishabh is present in all object`);
    
}

Array.prototype.heyrishabh = function(){
    console.log(`rishabh Arr`);
    
}
heroPower.rishabh()
myHeros.rishabh()
//heroPower.heyrishabh()-- it do not have heyrishabh property because we injected the property in array only and heropower is an object
myHeros.heyrishabh()


// inheritance 
const Teacher ={
    makeVideo:"true"

}

const TeachingSupport ={
    isAvailable:false
}

const TASupport ={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport//it will borrow all properties of TeachingSupport object
}