"use strict";

let myArray = [1, 2, 3, 4];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[1]);

let galleryClass = document.querySelectorAll(".imagegallery");

console.log(galleryClass);
console.log(galleryClass.length);



for (let i = 0; i < galleryClass.length; i++) {
    //console.log(i);
    galleryClass[i].style.display = "none";
}


let currentImage = 0;
//galleryClass[0].style.display = "block";
galleryClass[currentImage].style.display = "block";

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

nextButton.addEventListener("click", function () {
    galleryClass[currentImage].style.display = "none";
    currentImage = currentImage + 1;

    if (currentImage >= galleryClass.length) {
        currentImage = 0;
    }
    galleryClass[currentImage].style.display = "block";

});

prevButton.addEventListener("click", function () {
    galleryClass[currentImage].style.display = "none";
    currentImage = currentImage - 1;

    if (currentImage <= -1) {
        currentImage = galleryClass.length - 1;
    }
    galleryClass[currentImage].style.display = "block";

});

let cycle = false;
let cycleInterval;

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
    clearInterval(cycleInterval);
    cycle = false;
});

let startButton = document.getElementById("start");
startButton.addEventListener("click", function () {

    if (cycle == false) {
        cycleInterval = setInterval(function () {
            galleryClass[currentImage].style.display = "none";
            currentImage = currentImage + 1;

            if (currentImage >= galleryClass.length) {
                currentImage = 0;
            }
            galleryClass[currentImage].style.display = "block";

        }, 3000);
        cycle = true;
    }
});

