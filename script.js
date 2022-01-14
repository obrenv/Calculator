let num1 = document.getElementsByClassName('button button9')[0];
let num2 = document.getElementsByClassName('button button10')[0];
let num3 = document.getElementsByClassName('button button11')[0];
let num4 = document.getElementsByClassName('button button5')[0];
let num5 = document.getElementsByClassName('button button6')[0];
let num6 = document.getElementsByClassName('button button7')[0];
let num7 = document.getElementsByClassName('button button1')[0];
let num8 = document.getElementsByClassName('button button2')[0];
let num9 = document.getElementsByClassName('button button3')[0];
let num0 = document.getElementsByClassName('button button14')[0];

let clr = document.getElementsByClassName('buttontop clear')[0];
let del = document.getElementsByClassName('buttontop delete')[0];

let addBtn = document.getElementsByClassName('button button16')[0];
let substractBtn = document.getElementsByClassName('button button12')[0];
let divideBtn = document.getElementsByClassName('button button4')[0];
let multiplyBtn = document.getElementsByClassName('button button8')[0];

let dot = document.getElementsByClassName('button button13')[0];
let eval = document.getElementsByClassName('button button15')[0];

let numberTemp = [];
let operationsArray = [];

let numberOne = 0;
let numberTwo = 0;
let operator;

let result = 0;

let counter = 0;

let screen = document.getElementById('screenTxt');
let display = function(){
screen.textContent = numberTemp.join("");
}








num1.onclick = function(){
  numberTemp.push(1);
  display();
}

num2.onclick = function(){
  numberTemp.push(2);
  display();
}

num3.onclick = function(){
  numberTemp.push(3);
  display();
}

num4.onclick = function(){
  numberTemp.push(4);
  display();
}

num5.onclick = function(){
  numberTemp.push(5);
  display();
}

num6.onclick = function(){
  numberTemp.push(6);
  display();
}

num7.onclick = function(){
  numberTemp.push(7);
  display();
  }

num8.onclick = function(){
  numberTemp.push(8);
  display();
}

num9.onclick = function(){
  numberTemp.push(9);
  display();
}

num0.onclick = function(){
  numberTemp.push(0);
  display();
}




del.onclick = function(){
  numberTemp.pop();
  display();
}

clr.onclick = function(){
numberTemp = [];
numberOne = 0;
numberTwo = 0;
result = 0;
screen.innerHTML = "0   _   0&nbsp&nbsp&nbsp&nbsp";
}


let evaluateThis = function() {
operationsArray.push("e");
numberTwo = numberTemp.join("");

if(operator==="add"){ result = add(numberOne,numberTwo)}
else if(operator==="substract"){ result = substract(numberOne,numberTwo)}
else if(operator==="multiply"){ result = multiply(numberOne,numberTwo)}
else if(operator==="divide"){ result = divide(numberOne,numberTwo)}

numberOne = result;
numberTwo = 0;
numberTemp = [];
operator = undefined;
screen.innerHTML = result;
}




function add(a,b){
  return parseInt(a) + parseInt(b);
}


function substract(a,b){
  return parseInt(a) - parseInt(b);
}


function multiply(a,b){
  return parseInt(a) * parseInt(b);
}


function divide(a,b){
  return parseInt(a) / parseInt(b);
}


addBtn.onclick = function(){
  if(operationsArray[operationsArray.length-1] !== "e" && operationsArray[operationsArray.length-1] !== undefined){
    evaluateThis();
  }
operationsArray.push("o");

if(counter === 0){
    if(operator === undefined){
      numberOne = numberTemp.join("");
      operator = "add";
      numberTemp = [];
      counter ++;
    }

    else{
      operator = "add"
      numberTemp = [];
    }
}

else{
  numberTwo = numberTemp.join("");
  operator = "add";
  numberTemp = [];
}


}

substractBtn.onclick = function(){
  if(operationsArray[operationsArray.length-1] !== "e" && operationsArray[operationsArray.length-1] !== undefined){
    evaluateThis();
  }
  operationsArray.push("o");
  if(counter === 0){
    if(operator === undefined){
      numberOne = numberTemp.join("");
      operator = "substract";
      numberTemp = [];
      counter ++;
    }

    else{
    operator = "substract";
    numberTemp = [];
    }
  }

  else{
    numberTwo = numberTemp.join("");
    operator = "substract";
    numberTemp = [];
  }
}

multiplyBtn.onclick = function(){
  if(operationsArray[operationsArray.length-1] !== "e" && operationsArray[operationsArray.length-1] !== undefined){
    evaluateThis();
  }
  operationsArray.push("o");
if(counter === 0){
    if(operator === undefined){
    numberOne = numberTemp.join("");
    operator = "multiply";
    numberTemp = [];
    counter ++;
    }

    else{
      operator = "multiply";
      numberTemp = [];
    }
}

else{
  numberTwo = numberTemp.join("");
  operator = "multiply";
  numberTemp = [];
}

}

divideBtn.onclick = function(){
  if(operationsArray[operationsArray.length-1] !== "e" && operationsArray[operationsArray.length-1] !== undefined){
    evaluateThis();
  }
  operationsArray.push("o");
if(counter === 0){
  if(operator === undefined){
    numberOne = numberTemp.join("");
    operator = "divide";
    numberTemp = [];
    counter ++;
  }

  else{
    operator = "divide"
    numberTemp = [];
  }
}

else{
  numberTwo = numberTemp.join("");
  operator = "divide";
  numberTemp = [];
}


}

eval.onclick = evaluateThis;
