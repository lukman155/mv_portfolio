const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.navi');
const disappear = document.querySelector('.disappear');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    disappear.classList.toggle('active');
    hamburger.classList.toggle('active');
    navi.classList.toggle('active');
}

