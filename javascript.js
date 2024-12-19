console.log("hi");


//when click at an operator, take it to the screen 
// when clicked at =, make the result appear at the 'actual' line
//

let operator = "";
let previousValue = "";
let actualValue = "";

let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let decimal = document.querySelector(".decimal");

let previous = document.querySelector(".previous");
let actual = document.querySelector(".actual");


clear.addEventListener("click",()=>{
    previous.textContent = "";
    actual.textContent = "";
    operator = "";
    previousValue = "";
    actualValue = "";vff
})


numbers.forEach((num)=>
    num.addEventListener("click",(event)=>{
        actualValue += event.target.textContent;
        actual.textContent = actualValue;
    }));

operators.forEach(function(operator){
    operator.addEventListener("click",(event)=>{
        if(operator = ""){
        operator = event.target.textContent;
        actualValue = actualValue + operator;
        actual.textContent = actualValue + operator.toString();
        } else {
        previousValue += actualValue + operator;
        previous.textContent = previousValue + operator;
         }
});
});

//21 min







