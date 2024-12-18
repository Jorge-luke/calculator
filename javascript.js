console.log("hi");

//make a var for what is at the screen
//at each number clicked, change the var for what is at the screen
//when click at an operator, take it to the screen 
// when clicked at =, make the result appear at the 'actual' line
//

let operator = "";
let previousValue = "";
let actualValue = "";

let clear = document.querySelector("#clear");
let equal = document.querySelector(".equal");
let numbers = document.querySelectorAll("number");
let operators = document.querySelectorAll("operator");
let decimal = document.querySelector(".decimal");

let previous = document.querySelector(".previous");
let actual = document.querySelector(".actual");


