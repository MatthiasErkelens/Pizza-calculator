var small = 7.50;
var medium  = 9.50;
var large = 12.00;

var Small = prompt("How many small pizza's do you want?");
var Medium = prompt("How many medium pizza's do you want?");
var Large = prompt("How many large pizza's do you want?");

var total = Small * small + Medium * medium + Large * large;

document.write("Small pizza's =" + Small);
document.write("<br> Price = " + Small * small);
document.write("<br><br> Medium pizza's =" + Medium);
document.write("<br> Price = " + Medium * medium);
document.write("<br><br> Large pizza's =" + Large);
document.write("<br> Price = " + Large  * large);
document.write("<br><br> price = " + total);

alert(total)
