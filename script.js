const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.navi');
const disappear = document.querySelector('.disappear');
const headerDisappear = document.querySelector('.header-text');
const text = document.querySelector('.color-text');

hamburger.addEventListener('click', mobileMenu);
text.addEventListener('click', mobileMenu);

function mobileMenu() {
    headerDisappear.classList.toggle('active')
    disappear.classList.toggle('active');
    hamburger.classList.toggle('active');
    navi.classList.toggle('active');
    text.classList.toggle('active');
}

