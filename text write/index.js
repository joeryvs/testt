console.log("hoi");

var butto = document.getElementById("test");
var txt = document.getElementById("txt");
var total = "";
var g = 'goodbye'
txt.onpointerover = function () {
  console.log(Random_number());
};

function Random_number() {
  return Math.round(300 * Math.random());
}

window.ondblclick = function () {
  console.log("q");
  if (document.body.classList.contains("hello")) {
    console.log("yes");
    document.body.classList.remove("hello");
  }
  var totall = "";
  for (i = 1; i < 300; i++) {
    totall += i;
    totall += '\n'
    txt.innerText = totall;
    console.log(g);
  }
};

butto.onclick = function () {
  var g = Random_number();
  console.log(g);
  // document.write(longText);
  g = document.body.classList.toggle("hello");
  console.log(g);
  // txt.write(longText)
};
