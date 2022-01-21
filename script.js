// buttons variables

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


// later operations variables

let numberTemp = [];
let operationsArray = [];
let numbersPlusOperations = [];

let numberOne = 0;
let numberTwo = 0;
let operator;

let result = 0;

let counter = 0;

let dotCounter = 0;

let screen = document.getElementById('screenTxt');
let display = function(){
screen.textContent = numberTemp.join("");
}








num1.onclick = function(){
  numberTemp.push(1);
  numbersPlusOperations.push("num");
  display();
}

num2.onclick = function(){
  numberTemp.push(2);
  numbersPlusOperations.push("num");
  display();
}

num3.onclick = function(){
  numberTemp.push(3);
  numbersPlusOperations.push("num");
  display();
}

num4.onclick = function(){
  numberTemp.push(4);
  numbersPlusOperations.push("num");
  display();
}

num5.onclick = function(){
  numberTemp.push(5);
  numbersPlusOperations.push("num");
  display();
}

num6.onclick = function(){
  numberTemp.push(6);
  numbersPlusOperations.push("num");
  display();
}

num7.onclick = function(){
  numberTemp.push(7);
  numbersPlusOperations.push("num");
  display();
  }

num8.onclick = function(){
  numberTemp.push(8);
  numbersPlusOperations.push("num");
  display();
}

num9.onclick = function(){
  numberTemp.push(9);
  numbersPlusOperations.push("num");
  display();
}

num0.onclick = function(){
  numberTemp.push(0);
  numbersPlusOperations.push("num");
  display();
}

dot.onclick = function(){
if (dotCounter>0){
  return;
}

  numberTemp.push(".");
  numbersPlusOperations.push("num");
  dotCounter++
  display();
}




del.onclick = function(){
  numberTemp.pop();
  display();
}

let cleanSlate = function(){
numberTemp = [];
numberOne = 0;
numberTwo = 0;
result = 0;
operationsArray=[];
counter = 0;
numbersPlusOperations = [];
dotCounter = 0;
operator = undefined;}

clr.onclick = function(){
cleanSlate();
screen.innerHTML = "0   _   0&nbsp&nbsp&nbsp&nbsp";
}


let evaluateThis = function() {

operationsArray.push("e");
numberTwo = numberTemp.join("");

if(numberTemp.length === 1 && numberTemp[0]===0 && operator==="divide"){
  cleanSlate();
  screen.innerHTML = "No way my dude";
return;
}


if(operator==="add"){ result = add(numberOne,numberTwo)}
else if(operator==="substract"){ result = substract(numberOne,numberTwo)}
else if(operator==="multiply"){ result = multiply(numberOne,numberTwo)}
else if(operator==="divide"){ result = divide(numberOne,numberTwo)}

numberOne = result;
numberTwo = 0;
numberTemp = [];
operator = undefined;

if(result%1===0){
  screen.innerHTML = result;
}

else{
screen.innerHTML = result.toFixed(2);
}
dotCounter = 0;
}

function add(a,b){
  return Number(a) + Number(b);
}

function substract(a,b){
  return Number(a) - Number(b);
}

function multiply(a,b){
  return Number(a) * Number(b);
}

function divide(a,b){
  return Number(a) / Number(b);
}


addBtn.onclick = function(){

//pressing plus twice and pressing before antering any numbers bug fix
  if(numbersPlusOperations[numbersPlusOperations.length-1] === "ope" || numbersPlusOperations.length === 0){
  return;
  }
  numbersPlusOperations.push("ope");

  if(operationsArray[operationsArray.length-1] !== "e" && operationsArray[operationsArray.length-1] !== undefined){
    evaluateThis();
  }
    operationsArray.push("o");
    dotCounter = 0;
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
  dotCounter = 0;
  if(numbersPlusOperations[numbersPlusOperations.length-1] === "ope" || numbersPlusOperations.length === 0){
  return;
  }
  numbersPlusOperations.push("ope");


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

  dotCounter = 0;
  if(numbersPlusOperations[numbersPlusOperations.length-1] === "ope" || numbersPlusOperations.length === 0){
  return;
  }
  numbersPlusOperations.push("ope");

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
  dotCounter = 0;
  if(numbersPlusOperations[numbersPlusOperations.length-1] === "ope" || numbersPlusOperations.length === 0){
  return;
  }
  numbersPlusOperations.push("ope");
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
