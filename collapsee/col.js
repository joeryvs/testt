console.log("work");

const ff1 = document.getElementById("ff1");
const ff2 = document.getElementById("ff2");
const ff3 = document.getElementById("ff3");
const ff4 = document.getElementById("ff4");
const ff5 = document.getElementById("ff5");
const ff6 = document.getElementById("ff6");
const ff7 = document.getElementById("ff7");


ff5.addEventListener("click", () =>{
    console.log(ff5);
})

ff4.onclick = function() {
    console.log(ff4);
}

ff3.addEventListener("dragend", () => {
    console.log(ff3);
})

document.querySelectorAll(".buttons").forEach((elm) => 
{
    console.log(elm)

  elm.querySelector("button").addEventListener("click", () => 
  {
    elm.classList.toggle("open");
    console.log(elm)

    elm.querySelector("button").innerText = elm.classList.contains("open")
      ? "⟶"
      : "⤵";
  });
});
