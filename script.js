const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.navi');
const disappear = document.querySelector('.disappear');
const headerDisappear = document.querySelector('.header-text');
const text = document.querySelector('.color-text');
const headerDesktop = document.querySelector('.header-desktop');
const projectID = document.querySelector('#project-section');
const aboutID = document.querySelector('#about-section');
const contactID = document.querySelector('#contact-section');
const lineSelector = document.querySelector('.line');
const lineSelector1 = document.querySelector('.line1');
const lineSelector2 = document.querySelector('.line2');
var sticky = headerDesktop.offsetTop

hamburger.addEventListener('click', mobileMenu);
text.addEventListener('click', mobileMenu);
window.onscroll = function() {scrollFunction()};

projectID.addEventListener('mouseover', addLine);
aboutID.addEventListener('mouseover', addLine1);
contactID.addEventListener('mouseover', addLine2);

projectID.addEventListener('mouseout', removeLine);
aboutID.addEventListener('mouseout', removeLine1);
contactID.addEventListener('mouseout', removeLine2);


function addLine() {
    lineSelector.classList.add('underline');
}
function addLine1() {
    lineSelector1.classList.add('underline');
}
function addLine2() {
    lineSelector2.classList.add('underline');
}

function removeLine() {
    lineSelector.classList.remove('underline');
}
function removeLine1() {
    lineSelector1.classList.remove('underline');
}
function removeLine2() {
    lineSelector2.classList.remove('underline');
}

function scrollFunction() {
    if (window.pageYOffset > sticky) {
        headerDesktop.classList.add("scroll");
        headerDesktop.classList.add("sticky");
    } else {
        headerDesktop.classList.remove("scroll");
        headerDesktop.classList.add("sticky");
    }   
}

function mobileMenu() {
    headerDisappear.classList.toggle('active')
    disappear.classList.toggle('active');
    hamburger.classList.toggle('active');
    navi.classList.toggle('active');
    text.classList.toggle('active');
}

