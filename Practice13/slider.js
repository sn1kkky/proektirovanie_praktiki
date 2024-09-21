let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove("active");
    });

    slides[currentIndex].style.display = "block";
    dots[currentIndex].classList.add("active");
}


function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

function initSlider() {
    showSlide(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index));
});

document.addEventListener("DOMContentLoaded", initSlider);