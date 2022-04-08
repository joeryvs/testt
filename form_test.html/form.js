console.log('connect');
console.time()

let g = document.getElementById("sel1");
let t1 = document.getElementById("checks")
let t2 = document.getElementById("checksz")
var z;


var arr = [g,t1,t2];


arr.forEach(element =>  {
    console.log(element);
    
});


t1.onclick = function() {
    console.timeLog()
    z = t1.toggleAttribute("test")
    console.log(z)
}


t2.onclick = function() {
    console.timeLog()
    z = t2.toggleAttribute("test")
    console.log(z)
}