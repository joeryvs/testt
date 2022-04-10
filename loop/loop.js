console.log("test complete");

let hell1 = document.getElementById("hel1");
let hell2 = document.getElementById("hle2");
let hell3 = document.getElementById("hel3");
let hell4 = document.getElementById("hel4");
let hell5 = document.getElementById("hel5");
let hell6 = document.getElementById("hel6");
let bod = document.body;




hell1.onclick = function() {
  console.log(document.body);
};

hell2.onclick = function () {
  console.log(document.head);
};
hell3.onclick = function () {
    new_color();
    r_getal(255);
//   console.log(document.getElementById("hel3"));
};
hell4.onclick = function () {
  console.log(document.getElementsByClassName("button"));
};
hell5.onclick = function () {
  console.log(document.getElementsByName("button"));
};
hell6.onclick = function () {
  console.log(bod.toggleAttribute("toggle"));
  bod.toggleAttribute(this.className,"init");
  console.log(44);
};

bod.ontoggle = function () {
  console.log("tata");
};



function new_color() {
    console.log("works");
    var r,g,b;
    r = r_getal(255);
    g = r_getal(255);
    b = r_getal(255);
    // console.log(b)
    return (r, g, b);    
}

function r_getal(upper)
{
    var f = upper;
    var g = Math.random()
    let w = Math.round(f*g)
    console.log(w)
    return w ;
}