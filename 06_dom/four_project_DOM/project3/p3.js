const clock = document.getElementById('clock')

// this method ask after how much time the mehtod will continuously run 
setInterval(function(){
    let date = new Date()
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000)

