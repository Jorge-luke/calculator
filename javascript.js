console.log("hi");


//when click at an operator, take it to the screen 
// when clicked at =, make the result appear at the 'actual' line
//

let operator = "";
let previousValue = "";
let actualValue = "";
let isDecimal = "";

let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal"); 
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let decimal = document.querySelector(".decimal");

let previous = document.querySelector(".previous");
let actual = document.querySelector(".actual");
let back = document.querySelector(".back");



clear.addEventListener("click",()=>{
    previous.textContent = "";
    actual.textContent = "";
    operator = "";
    previousValue = "";
    actualValue = "";
    isDecimal = "";
})

decimal.addEventListener("click",()=>{
    if(isDecimal == ""){
        actualValue += `.`;
        actual.textContent = actualValue;
    }
    isDecimal = 1;
})

numbers.forEach((num)=>
    num.addEventListener("click",(event)=>{
        if(operator == ""){
        if(actualValue.length<=10){
            actualValue += event.target.textContent;
            actual.textContent = actualValue+operator;
        }}else{
            actualValue += event.target.textContent;
            actual.textContent = actualValue;
        }
    }));



operators.forEach(function(op){
    op.addEventListener("click",(event)=>{

        if(operator != "" && actualValue == ""){
            ///////
                    previousValue = parseFloat(previousValue) || 0;
                    
                    operator = event.target.textContent;
                    previous.textContent = previousValue + " " + operator;
            
                    if (previous.textContent.length>8){
                        previous.textContent = previous.textContent.slice(0,8);
                    }
                    isDecimal = "";
                    }else if(operator != ""){
///////
        previousValue = parseFloat(previousValue) || 0;
        actualValue =  parseFloat(actualValue) || 0;
        if (operator == `+`){
        previousValue = previousValue + actualValue;
        }else if (operator == `-`){
        previousValue = previousValue - actualValue;
        }else if (operator == `x`){
        previousValue = previousValue * actualValue;
        }else if (operator == `/` && actualValue === "0"){
            previous.textContent = "Can't divide by zero. Press clear!"
            return;
        }
        else if (operator == `/`){
        previousValue = previousValue / actualValue;
        }
        actual.textContent = "";
        actualValue = "";
        operator = event.target.textContent;
        previous.textContent = previousValue + " " + operator;

        if (previous.textContent.length>8){
            previous.textContent = previous.textContent.slice(0,8);
        }
        isDecimal = "";
        }
////
        
        else {
        operator = event.target.textContent;
        previous.textContent = actualValue + " " + operator;
        if (previous.textContent.length>8){
            previous.textContent = previous.textContent.slice(0,8);
        }
        previousValue = actualValue;
        actualValue = "";
        actual.textContent = "";
        isDecimal = "";
        }
        
});
});

equal.addEventListener("click", function operate(){ 

    if(operator != "" && previousValue != ""){
        previousValue = parseFloat(previousValue) || 0;
        actualValue =  parseFloat(actualValue) || 0;


    if (operator == `+`){
    previousValue = previousValue + actualValue;
  }else if (operator == `-`){
    previousValue = previousValue - actualValue;
  }else if (operator == `x`){
    previousValue = previousValue * actualValue;
  }else if (operator == `/` && actualValue === "0"){
    previous.textContent = "Can't divide by zero. Press clear!"
    return;
  }else if (operator == `/`){
    previousValue = previousValue / actualValue;
  }
    actual.textContent = "";
    actualValue = previousValue;
    previousValue = previousValue.toString();
    actualValue = actualValue.toString();
    actual.textContent = "";
  previous.textContent = previousValue;
  if (previous.textContent.length>8){
    previous.textContent = previous.textContent.slice(0,8);
}
  operator = "";
  isDecimal = "";
  }});

  back.addEventListener("click", ()=>{
    actualValue.split("");
    actualValue = actualValue.slice(0,(actualValue.length-1));
    actualValue = actualValue.toString();
    actual.textContent = actualValue;
});


/////// KEYBOARD SUPPORT CODE

  document.addEventListener("keydown",(event)=>{
    const key = event.key;
    

    // HANDLE CLEAR START
    if (key === "c" || key === "C") {
        clear.click();
    }
    // HANDLE CLEAR END

    //HANDLE NUMBERS START 
    if ("1234567890".includes(key)){
        {
            if(operator == ""){
            if(actualValue.length<=10){
                actualValue += event.key;
                actual.textContent = actualValue+operator;
            }}else{
                actualValue += event.key;
                actual.textContent = actualValue;
            }
        }
            }
    //HANDLE NUMBERS END

    //HANDLE DECIMAL START

    if (",.".includes(key)){
        if(isDecimal == ""){
            actualValue += `.`;
            actual.textContent = actualValue;
        }
        isDecimal = 1;
    }

    //HANDLE DECIMAL END



    //HANDLE OPERATORS START
            if ("-+xX/".includes(key)){{
                if(operator != "" && actualValue == ""){
                            previousValue = parseFloat(previousValue) || 0;
                            
                            operator = event.key;
                            previous.textContent = previousValue + " " + operator;
                    
                            if (previous.textContent.length>8){
                                previous.textContent = previous.textContent.slice(0,8);
                            }
                            isDecimal = "";
                            }else if(operator != ""){
                previousValue = parseFloat(previousValue) || 0;
                actualValue =  parseFloat(actualValue) || 0;
                if (operator == `+`){
                previousValue = previousValue + actualValue;
                }else if (operator == `-`){
                previousValue = previousValue - actualValue;
                }else if (operator == `x` || operator ==`X`){
                previousValue = previousValue * actualValue;
                }else if (operator == `/` && actualValue === "0"){
                    previous.textContent = "Can't divide by zero. Press clear!"
                    return;
                }
                else if (operator == `/`){
                previousValue = previousValue / actualValue;
                }
                actual.textContent = "";
                actualValue = "";
                operator = event.key;
                previous.textContent = previousValue + " " + operator;
        
                if (previous.textContent.length>8){
                    previous.textContent = previous.textContent.slice(0,8);
                }
                isDecimal = "";
                }
                else {
                operator = event.key;
                previous.textContent = actualValue + " " + operator;
                if (previous.textContent.length>8){
                    previous.textContent = previous.textContent.slice(0,8);
                }
                previousValue = actualValue;
                actualValue = "";
                actual.textContent = "";
                isDecimal = "";
                }
                }
                    }
    // HANDLE OPERATORS END

    //HANDLE EQUAL START

    if("=".includes(key) || "Enter".includes(key)){ 

        if(operator != "" && previousValue != ""){
            previousValue = parseFloat(previousValue) || 0;
            actualValue =  parseFloat(actualValue) || 0;
    
    
        if (operator == `+`){
        previousValue = previousValue + actualValue;
      }else if (operator == `-`){
        previousValue = previousValue - actualValue;
      }else if (operator == `x`){
        previousValue = previousValue * actualValue;
      }else if (operator == `/` && actualValue === "0"){
        previous.textContent = "Can't divide by zero. Press clear!"
        return;
      }else if (operator == `/`){
        previousValue = previousValue / actualValue;
      }
        actual.textContent = "";
        actualValue = previousValue;
        previousValue = previousValue.toString();
        actualValue = actualValue.toString();
        actual.textContent = "";
      previous.textContent = previousValue;
      if (previous.textContent.length>8){
        previous.textContent = previous.textContent.slice(0,8);
    }
      operator = "";
      isDecimal = "";
      }
    }
    //HANDLE EQUAL END

    //HANDLE BACKSPACE START
    if(key === "Backspace"){
        actualValue.split("");
        actualValue = actualValue.slice(0,(actualValue.length-1));
        actualValue = actualValue.toString();
        actual.textContent = actualValue;
    }

    //HANDLE BACKSPACE END

    // Prevent default behavior for non-relevant keys
    event.preventDefault()
    
  });



//21 min







