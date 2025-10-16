"use strict";
let textInput = document.getElementById("myText");
let numberInput = document.getElementById("myNumber");
let selectInput = document.getElementById("mySelect");
let buttonInput = document.getElementById("myButton");
let output = document.getElementById("output");


buttonInput.addEventListener("click",function(){
    console.log(textInput.value + " " + numberInput.value + " " + selectInput.value);
    output.innerHTML = "";
    for(let i = 0; i < numberInput.value; i++){
        let insertMessage = "<div class='box'>" + textInput.value + "</div>"; 
        output.innerHTML = output.innerHTML + insertMessage;
    }

    let boxes = document.getElementsByClassName("box");
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = selectInput.value;
        boxes[i].style.width = "100px";
        boxes[i].style.height = "100px";
        
    }

});