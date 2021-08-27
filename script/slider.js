var slides = document.querySelector('.slider-items').children;
// var nextSlide = document.querySelector(".right-arrow");
var nextSlide = document.querySelector(".right-arrow");
var prevSlide = document.querySelector(".left-arrow");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function() {
    next("next");
}
prevSlide.onclick = function() {
    next("prev");
}

function next(direction) {

    if (direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}



function resetTimer() {
    // stop timer after clicked next & prev Button
    clearInterval(timer);
    // then start again timer
    timer = setInterval(autoPlay, 10000);
}

function autoPlay() {
    next('next');
}

var timer = setInterval(autoPlay, 10000);


