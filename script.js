let display = document.getElementById("display");

//Function to check if the last thing typed is a math symbol
function endsWithOperator() {
    let lastChar = display.innerText.slice(-1);
    return ["+","-","*","/"].includes(lastChar);
}

//This function is so whenever you press a number it replaces the "0" or "Error" if it's on screen
function pressNumber(num) {
    if(display.innerText === "0" || display.innerText === "Error") {
        display.innerText = num;
    }
    else {
        display.innerText += num;
    }
}

//Allows decimals to be typed and makes sure there can't be two typed in one number (i.e 1.4.3 wouldn't work)
function pressDecimal() {
    let current = display.innerText;
    let lastNumber = current.split(/[\+\-\*\/]/).pop();
    if(!lastNumber.includes(".")) {
        display.innerText += ".";
    }
}

//This is the Addition function(+)
function pressAdd() {
    if(!endsWithOperator()) {
        display.innerText +="+"
    }
}

//This is the Subtraction function (-)
function pressSubtract() {
    if(!endsWithOperator()){
        display.innerText += "-";
    }
}

//This is the Multiplication function (*)
function pressMultiply() {
    if (!endsWithOperator()) {
        display.innerText += "*";
    }
}

//This is the Division function (/)
function pressDivide() {
    if(!endsWithOperator()) {
        display.innerText += "/"
    }
}

//This function clears everthing and sets the value on screen to 0
function pressClear() {
    display.innerText = "0";
}

//This function erases the last character you typed
function pressBackspace() {
    if(display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    }
    else {
        display.innerText = "0";
    }
}

//This function runs to show the results of the problem entered
function pressEqual() {
    try {
        let result = eval(display.innerText); // eval() is the built in PEMDAS in JavaScript
        //Checks to see if the result is a real number
        if (!isFinite(result)) {
            display.innerText = "Error";
        } else {
            display.innerText = result; 
        }
    }
    catch (e) {
        display.innerText = "Error";
    }
}