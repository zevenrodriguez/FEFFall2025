"use strict";

let redClickBox = document.getElementById("redClick");
let showButton = document.getElementById("show");
let hideButton = document.getElementById("hide");
let toggleButton = document.getElementById("toggle");
let showHideBox = document.getElementById("showHideBox");

let overOut = document.querySelector("#overOut");

let toggleState = false; //boolean variables can only be true or false

let tabContentClass = document.getElementsByClassName("tabContent");

let tab1Content = document.getElementById("tab1Content");
let tab2Content = document.getElementById("tab2Content");
let tab3Content = document.getElementById("tab3Content");

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");


redClickBox.innerHTML = "<p>Click me!</p>";
redClickBox.classList.add("clickBox");

redClickBox.addEventListener("click", function () {
    console.log("clicking red box");
    document.querySelector("body").style.backgroundColor = "blue";
});

showButton.addEventListener("click", function () {
    showHideBox.classList.remove("hide");
});

hideButton.addEventListener("click", function () {
    showHideBox.classList.add("hide");
});

toggleButton.addEventListener("click", function () {
    if (toggleState == false) {
        //do something
        toggleState = true;
        showHideBox.classList.remove("hide");
    } else {
        //is the oposite of the if statement
        toggleState = false;
        showHideBox.classList.add("hide");
    }
});

overOut.addEventListener("mouseover", function () {
    overOut.style.fontSize = "20px";
});

overOut.addEventListener("mouseout", function () {
    overOut.style.fontSize = "12px";
});

tab1Content.style.visibility = "hidden";
tab2Content.style.visibility = "hidden";
tab3Content.style.visibility = "hidden";
tab1Content.style.display = "none";
tab2Content.style.display = "none";
tab3Content.style.display = "none";

tab1.addEventListener("click", function () {
    tab1Content.style.visibility = "visible";
    tab2Content.style.visibility = "hidden";
    tab3Content.style.visibility = "hidden";
    tab1Content.style.display = "block";
    tab2Content.style.display = "none";
    tab3Content.style.display = "none";
});


tab2.addEventListener("click", function () {
    tab1Content.style.visibility = "hidden";
    tab2Content.style.visibility = "visible";
    tab3Content.style.visibility = "hidden";
    tab1Content.style.display = "none";
    tab2Content.style.display = "block";
    tab3Content.style.display = "none";
});

tab3.addEventListener("click", function () {
    tab1Content.style.visibility = "hidden";
    tab2Content.style.visibility = "hidden";
    tab3Content.style.visibility = "visible";
    tab1Content.style.display = "none";
    tab2Content.style.display = "none";
    tab3Content.style.display = "block";
});


