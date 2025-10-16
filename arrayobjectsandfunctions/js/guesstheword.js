"use strict";

let textInput = document.getElementById("myText");
let buttonInput = document.getElementById("myButton");
let output = document.getElementsByClassName("output");
let incorrect = document.getElementById("incorrect");

let letters = ['i','b','i','s'];
console.log(letters[1]);
console.log(letters.length);

buttonInput.addEventListener("click", function(){
    console.log("textinput: " + textInput.value);
    let correct = false;
    for(let i = 0; i < letters.length; i++){
        if(textInput.value == letters[i]){
            output[i].innerHTML = letters[i];
            correct = true;
        }else{
            //incorrect
        }
    }

    if(correct == false){
        incorrect.innerHTML = "Wrong letter! Please try again!"
        setTimeout(function(){
            incorrect.innerHTML = "";
        },3000);
    }
});