let butt1 = document.getElementById("but1");
let butt2 = document.getElementById("but2");
let butt3 = document.getElementById("but3");
let butt4 = document.getElementById("but4");
let butt5 = document.getElementById("but5");
let butt6 = document.getElementById("but6");
let butt7 = document.getElementById("but7");
let butt8 = document.getElementById("but8");
let butt9 = document.getElementById("but9");
let special = document.getElementById("special");

var zount = 0;
var summ = 0;

function logg(input) {
  console.log(input); 
  summ += input;
  zount += 1;
}

butt1.onclick = function () {
  logg(1);
};

butt2.onclick = function () {
  logg(2);
};

butt3.onclick = function () {
  logg(3);
};

butt4.onclick = function () {
  logg(4);
};

butt5.onclick = function () {
  logg(5);
};

butt6.onclick = function () {
  logg(6);
};

butt7.onclick = function () {
  logg(7);
};

butt8.onclick = function () {
  logg(8);
};

butt9.onclick = function () {
  logg(9);
};

special.onclick = function () {
  console.log("de amount of clicks is ", zount);
  console.log("the total sum is ", summ);
};
