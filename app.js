
var scroll_to_one = document.getElementById('question-1');
var scroll_to_two = document.getElementById('question-2');
var scroll_to_three = document.getElementById('question-3');
var scroll_to_four = document.getElementById('question-4');
var scroll_to_five = document.getElementById('question-5');

var q1ButtonA = document.getElementById("button-A");
var q1ButtonB = document.getElementById("button-B");
var q2ButtonC = document.getElementById("button-C");
var q2ButtonD = document.getElementById("button-D");
var q3ButtonE = document.getElementById("button-E");
var q3ButtonF = document.getElementById("button-F");
var q4ButtonG = document.getElementById("button-G");
var q4ButtonH = document.getElementById("button-H");
var q5ButtonI = document.getElementById("button-I");

q1ButtonA.addEventListener("click", function(){
    scroll_to_two.scrollIntoView({behavior: 'smooth'});
});
q1ButtonB.addEventListener("click", function(){
    scroll_to_two.scrollIntoView({behavior: 'smooth'});
});
q2ButtonC.addEventListener("click", function(){
    scroll_to_three.scrollIntoView({behavior: 'smooth'});
});
q2ButtonD.addEventListener("click", function(){
    scroll_to_three.scrollIntoView({behavior: 'smooth'});
});
q3ButtonE.addEventListener("click", function(){
    scroll_to_four.scrollIntoView({behavior: 'smooth'});
});
q3ButtonF.addEventListener("click", function(){
    scroll_to_four.scrollIntoView({behavior: 'smooth'});
});
q4ButtonG.addEventListener("click", function(){
    scroll_to_five.scrollIntoView({behavior: 'smooth'});
});
q4ButtonH.addEventListener("click", function(){
    scroll_to_five.scrollIntoView({behavior: 'smooth'});
});