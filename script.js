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

let numberOne = 0;
let numberTwo = 0;
let operator;

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




del.onclick = function(){
  numberTemp.pop();
  display();
}

clr.onclick = function(){
numberTemp = [];
screen.innerHTML = "0   _   0&nbsp&nbsp&nbsp&nbsp";
}





function add(a,b){
  return a+b;
}


function substract(a,b){
  return a-b;
}


function multiply(a,b){
  return a*b;
}


function divide(a,b){
  return a/b;
}


addBtn.onclick = function(){
numberOne = numberTemp.join("")
operator = "add"
counter ++  
}
