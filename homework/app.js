let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let btn4 = document.querySelector(".button4");

let redLight = document.querySelector(".bulb1");
let yellowLight = document.querySelector(".bulb2");
let greenLight = document.querySelector(".bulb3");

btn1.addEventListener("click", function () {
  redLight.style.backgroundColor = "red";
  greenLight.style.backgroundColor = "black";
  yellowLight.style.backgroundColor = "black";
});

btn2.addEventListener("click", function () {
  yellowLight.style.backgroundColor = "yellow";
  greenLight.style.backgroundColor = "black";
  redLight.style.backgroundColor = "black";
});

btn3.addEventListener("click", function () {
  greenLight.style.backgroundColor = "green";
  yellowLight.style.backgroundColor = "black";
  redLight.style.backgroundColor = "black";
});

btn4.addEventListener("click", function () {
  greenLight.style.backgroundColor = "black";
  yellowLight.style.backgroundColor = "black";
  redLight.style.backgroundColor = "black";
});
