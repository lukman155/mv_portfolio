const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.navi');
const disappear = document.querySelector('.disappear');
const headerDisappear = document.querySelector('.header-text');
const headerDesktop = document.querySelector('.header-desktop');
const projectID = document.querySelector('#project-section');
const aboutID = document.querySelector('#about-section');
const contactID = document.querySelector('#contact-section');
const lineSelector = document.querySelector('.line');
const lineSelector1 = document.querySelector('.line1');
const lineSelector2 = document.querySelector('.line2');
const cancel = document.querySelector('.cancel');
const cancel1 = document.querySelector('.cancel1');
const cancel2 = document.querySelector('.cancel2');
const sticky = headerDesktop.offsetTop;
const headerMobile = document.querySelector('.header-mobile');

let portfolio = {project1: {img:'./images/project-img.png', 
                            name:'Project Name', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.', 
                            skills:['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'], 
                            source:'#', deployed:'#'},
                  project2: {img:'./images/project-img.png', 
                            name:'Project Name', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.', 
                            skills:['CSS', 'JavaScript', 'HTML'], 
                            source:'#', deployed:'#'},
                  project3: {img:'./images/project-img.png', 
                            name:'Project Name', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.', 
                            skills:['Ruby on Rails', 'JavaScript', 'HTML'], 
                            source:'#', deployed:'#'},
                  project4: {img:'./images/project-img.png', 
                            name:'Project Name', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.', 
                            skills:['Ruby on Rails', 'JavaScript', 'HTML'], 
                            source:'#', deployed:'#'},
                  project5: {img:'./images/project-img.png', 
                            name:'Project Name', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.', 
                            skills:['Ruby on Rails', 'JavaScript', 'HTML'], 
                            source:'#', deployed:'#'},
                  project6: {img:'./images/project-img.png', 
                            name:'Project Name', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.', 
                            skills:['Ruby on Rails', 'JavaScript', 'HTML'], 
                            source:'#', deployed:'#'}
                   };
function skillGen(y) {
  let str=''
  for(let x of y.skills) {
    str += `<li>${x}</li>`
  }
  return str
}


let portGenerator = Object.keys(portfolio).reduce((accum, currKey) =>
  accum + `
  <div class="project-frame flex-container">
  <img class="project-image" src="${portfolio[currKey].img}" alt="project desc">
  <div class="project-detail flex-container">
  <h2 class="project-name">${portfolio[currKey].name}</h2>
  <ul class="skills">${skillGen(y=portfolio[currKey])}</ul>
  <a href='#'><button type="button" class="project-button">See Project</button></a>
  </div> </div>`, '');
  document.getElementById('portfo').innerHTML = portGenerator;

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
    headerDesktop.classList.add('scroll');
    headerDesktop.classList.add('sticky');
  } else {
    headerDesktop.classList.remove('scroll');
    headerDesktop.classList.remove('sticky');
  }
}

function mobileMenu() {
  headerDisappear.classList.toggle('active');
  disappear.classList.toggle('active');
  hamburger.classList.toggle('active');
  navi.classList.toggle('active');
  headerMobile.classList.toggle('scroll');
  headerMobile.classList.toggle('sticky');
}

hamburger.addEventListener('click', mobileMenu);
window.onscroll = () => { scrollFunction(); };
cancel.addEventListener('click', mobileMenu);
cancel1.addEventListener('click', mobileMenu);
cancel2.addEventListener('click', mobileMenu);

hamburger.addEventListener('click', mobileMenu);
window.onscroll = () => { scrollFunction(); };
cancel1.addEventListener('click', mobileMenu);
cancel2.addEventListener('click', mobileMenu);

projectID.addEventListener('mouseover', addLine);
aboutID.addEventListener('mouseover', addLine1);
contactID.addEventListener('mouseover', addLine2);

projectID.addEventListener('mouseout', removeLine);
aboutID.addEventListener('mouseout', removeLine1);
contactID.addEventListener('mouseout', removeLine2);