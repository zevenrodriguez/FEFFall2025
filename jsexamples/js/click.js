"use strict";

let redClickBox = document.getElementById("redClick");

redClickBox.innerHTML = "<p>Click me!</p>";
redClickBox.classList.add("clickBox");

redClickBox.addEventListener("click",function(){
    console.log("clicking red box");
    document.querySelector("body").style.backgroundColor = "blue";

});