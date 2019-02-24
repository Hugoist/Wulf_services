//slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("slider__nav-dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

//footer feedback popup show

let btnClosePopUp = document.querySelector('.close-popup');
let btnShowPopUp = document.querySelector('.footer__button');
let popUp = document.querySelector('.footer__feedback');
let footerBanner = document.querySelector('.wrapper_footer');
let footerAutority = document.querySelector('.authority');


console.log(btnClosePopUp);
console.log(popUp);
console.log(btnShowPopUp);

let togglePopUp = function() {
    popUp.toggleAttribute('hidden');
    footerBanner.toggleAttribute('hidden');
    footerAutority.toggleAttribute('hidden');

};

btnClosePopUp.addEventListener('click', togglePopUp);
btnShowPopUp.addEventListener('click', togglePopUp);