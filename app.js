var scroll_to_one = document.getElementById("question-1");
var scroll_to_two = document.getElementById("question-2");
var scroll_to_three = document.getElementById("question-3");
var scroll_to_four = document.getElementById("question-4");
var scroll_to_five = document.getElementById("question-5");

var q1ButtonA = document.getElementById("button-A");
var q1ButtonB = document.getElementById("button-B");
var q2ButtonC = document.getElementById("button-C");
var q2ButtonD = document.getElementById("button-D");
var q3ButtonE = document.getElementById("button-E");
var q3ButtonF = document.getElementById("button-F");
var q4ButtonG = document.getElementById("button-G");
var q4ButtonH = document.getElementById("button-H");
var q5ButtonI = document.getElementById("button-I");

var footer1 = document.getElementById("footer1");
var footer2 = document.getElementById("footer2");
var footer3 = document.getElementById("footer3");
var footer4 = document.getElementById("footer4");
var footer5 = document.getElementById("footer5");

q1ButtonA.addEventListener("click", function () {
  setTimeout(() => {
    scroll_to_two.scrollIntoView({ behavior: "smooth" });
  }, 350);
  document.getElementById("header1").setAttribute("class", "answered");
  document.getElementById("footer1").setAttribute("class", "selected");
});
q1ButtonB.addEventListener("click", function () {
  setTimeout(() => {
    scroll_to_two.scrollIntoView({ behavior: "smooth" });
  }, 350);
  document.getElementById("header1").setAttribute("class", "answered");
  document.getElementById("footer1").setAttribute("class", "selected");
});
q2ButtonC.addEventListener("click", function () {
  setTimeout(() => {
    scroll_to_three.scrollIntoView({ behavior: "smooth" });
  }, 350);
  document.getElementById("header2").setAttribute("class", "answered");
  document.getElementById("footer2").setAttribute("class", "selected");
});
q2ButtonD.addEventListener("click", function () {
  setTimeout(() => {
    scroll_to_three.scrollIntoView({ behavior: "smooth" });
  }, 350);
  document.getElementById("header2").setAttribute("class", "answered");
  document.getElementById("footer2").setAttribute("class", "selected");
});
q3ButtonE.addEventListener("click", function () {
  setTimeout(() => {
    scroll_to_four.scrollIntoView({ behavior: "smooth" });
  }, 350);
  document.getElementById("header3").setAttribute("class", "answered");
  document.getElementById("footer3").setAttribute("class", "selected");
});
q3ButtonF.addEventListener("click", function () {
  setTimeout(() => {
    scroll_to_four.scrollIntoView({ behavior: "smooth" });
  }, 350);
  document.getElementById("header3").setAttribute("class", "answered");
  document.getElementById("footer3").setAttribute("class", "selected");
});
q4ButtonG.addEventListener("click", function () {
  setTimeout(() => {
    scroll_to_five.scrollIntoView({ behavior: "smooth" });
  }, 350);
  document.getElementById("header4").setAttribute("class", "answered");
  document.getElementById("footer4").setAttribute("class", "selected");
});
q4ButtonH.addEventListener("click", function () {
  setTimeout(() => {
    scroll_to_five.scrollIntoView({ behavior: "smooth" });
  }, 350);
  document.getElementById("header4").setAttribute("class", "answered");
  document.getElementById("footer4").setAttribute("class", "selected");
});

footer1.addEventListener("click", function () {
  scroll_to_one.scrollIntoView({ behavior: "smooth" });
});

footer2.addEventListener("click", function () {
  scroll_to_two.scrollIntoView({ behavior: "smooth" });
});

footer3.addEventListener("click", function () {
  scroll_to_three.scrollIntoView({ behavior: "smooth" });
});

footer4.addEventListener("click", function () {
  scroll_to_four.scrollIntoView({ behavior: "smooth" });
});

footer5.addEventListener("click", function () {
  scroll_to_five.scrollIntoView({ behavior: "smooth" });
});

