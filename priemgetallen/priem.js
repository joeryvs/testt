console.log(3);

var optionss = ["xml", "priemgetallen",'prieem', "prime"]

var plek = document.getElementById("priemgetallen");
var priemss = [];
var titt = document.getElementById("title");
console.log(titt);

var n = Math.round(optionss.length * Math.random());
titt.innerText = optionss[n];
console.log(n);
// document.getElementById("title").innerText = optionss[Math.round(optionss.length * Math.random())];

var tot = "";
function ff() {
  var nu;
  for (i = 2; i < 100000; i++) {
    nu = isPriem(i) ? i + "\n" : "";
    tot += nu;
    if (i % 400 == 0) {
      console.log(i);
      plek.innerText = tot;
    }
  }
  plek.innerText = tot;
  return tot;
}


function isPriem(num) {
  let temps = true;
  priemss.forEach((j) => {
    if (num % j == 0) {
      
      temps = false;
      
    }
  });
  if (temps) {
      priemss.push(num);
  }

  return temps;
}

window.ondblclick = function () {
  console.log("works");
  ff();
  console.log("end work");
};
