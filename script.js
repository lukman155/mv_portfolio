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

const portfolio = {
  project1: {
    buttonId: '1',
    img: './images/magicmaths.png',
    name: 'Magic Maths',
    desc: 'In this project, a Web Application - magicmaths is built using React that performs general mathematical calculations and offer a host of other functionality. The webapp has 3 user interfaces.',
    skills: ['React', 'JavaScript', 'HTML'],
    source: 'https://github.com/lukman155/magicmaths',
    deployed: 'https://math-magic-react-static.onrender.com/calpage',
  },
  project2: {
    buttonId: '2',
    img: './images/cart.png',
    name: 'Shopping Cart',
    desc: 'A check out cart with login and full redux state availability for an online store using firebase on the backend to store data',
    skills: ['React', 'JavaScript', 'Redux'],
    source: 'https://github.com/lukman155/shoppingcart',
    deployed: 'https://shoppingcart-lukman155.vercel.app/',
  },
  project3: {
    buttonId: '3',
    img: './images/rosto-ss.png',
    name: 'Rosto',
    desc: 'A Recipe book for all sorts of meat.',
    skills: ['React', 'JavaScript', 'HTML'],
    source: 'https://github.com/lukman155/Rosto',
    deployed: 'https://lukman155.github.io/Rosto/dist/',
  },
  project4: {
    buttonId: '4',
    img: './images/todo-list-screenshot.png',
    name: 'To-Do List',
    desc: 'A to-do-list web app designed to create tasks in a to-do list and save them for later. A user can create, store and update a task as completed. Built with JavaScript.',
    skills: ['JavaScript', 'CSS', 'HTML', 'Webpack'],
    source: 'https://github.com/lukman155/To-Do-list',
    deployed: 'https://lukman155.github.io/To-Do-list/dist/',
  },
  project5: {
    buttonId: '5',
    img: './images/AwesomeBooks-Screenshot.png',
    name: 'Awesome Books',
    desc: 'Awesome books: A minimalist approach to an online personal book catalogue, A user can add titles with the authors name, save, and delete entries. Made with JavaScript.',
    skills: ['JavaScript', 'CSS', 'HTML'],
    source: 'https://github.com/lukman155/awesome-books/',
    deployed: 'https://lukman155.github.io/awesome-books/',
  },
  project6: {
    buttonId: '6',
    img: './images/space.png',
    name: 'Space Travellers Hub',
    desc: 'Space Travellers is a website for a company that provides commercial and scientific space travel services. The application allows users to reserve rockets and join selected space missions. This web application is built using React and Redux.',
    skills: ['React', 'JavaScript', 'HTML'],
    source: 'https://github.com/lukman155/space-travellers-hub',
    deployed: 'https://space-travellers-hub-navy.vercel.app/rockets',
  },
};

const portGenerator = Object.keys(portfolio).reduce((accum, currKey) => `${accum}
  <div class="project-frame flex-container">
  <img class="project-image fix" src="${portfolio[currKey].img}" alt="project desc">
  <div class="project-detail flex-container">
  <h2 class="project-name">${portfolio[currKey].name}</h2>
  <ul class="skills">${portfolio[currKey].skills.map((lang) => `<li>${lang}</li>`).join('')}</ul>
  <button type="button" id="${portfolio[currKey].buttonId}" class="project-button button-select">See Project</button>
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

const poplist = [{
  buttonId: '1',
  img: './images/magicmaths.png',
  name: 'Magic Maths',
  desc: 'In this project, a Web Application - magicmaths is built using React that performs general mathematical calculations and offer a host of other functionality. The webapp has 3 user interfaces.',
  skills: ['React', 'JavaScript', 'HTML'],
  source: 'https://github.com/lukman155/magicmaths',
  deployed: 'https://math-magic-react-static.onrender.com/',
},
{
  buttonId: '2',
  img: './images/cart.png',
  name: 'Shopping Cart',
  desc: 'A check out cart with login and full redux state availability for an online store using firebase on the backend to store data',
  skills: ['React', 'JavaScript', 'Redux'],
  source: 'https://github.com/lukman155/shoppingcart',
  deployed: 'https://shoppingcart-lukman155.vercel.app/',
},
{
  buttonId: '3',
  img: './images/rosto-ss.png',
  name: 'Rosto',
  desc: 'Rosto: A Recipe book for all sorts of meat.',
  skills: ['React', 'JavaScript', 'HTML'],
  source: 'https://github.com/lukman155/Rosto',
  deployed: 'https://lukman155.github.io/Rosto/dist/',
},
{
  buttonId: '4',
  img: './images/todo-list-screenshot.png',
  name: 'To-Do List',
  desc: 'A to-do-list web app designed to create tasks in a to-do list and save them for later. A user can create, store and update a task as completed. Built with JavaScript.',
  skills: ['JavaScript', 'CSS', 'HTML', 'Webpack'],
  source: 'https://github.com/lukman155/To-Do-list',
  deployed: 'https://lukman155.github.io/To-Do-list/dist/',
},
{
  buttonId: '5',
  img: './images/AwesomeBooks-Screenshot.png',
  name: 'Awesome Books',
  desc: 'Awesome books: A minimalist approach to an online personal book catalogue, A user can add titles with the authors name, save, and delete entries. Made with JavaScript.',
  skills: ['JavaScript', 'CSS', 'HTML'],
  source: 'https://github.com/lukman155/awesome-books',
  deployed: 'https://lukman155.github.io/awesome-books/',
},
{
  buttonId: '6',
  img: './images/space.png',
  name: 'Space Travellers Hub',
  desc: 'Space Travellers is a website for a company that provides commercial and scientific space travel services. The application allows users to reserve rockets and join selected space missions. This web application is built using React and Redux.',
  skills: ['React', 'JavaScript', 'HTML'],
  source: 'https://github.com/lukman155/space-travellers-hub',
  deployed: 'https://space-travellers-hub-navy.vercel.app/rockets',
}];

const popupList = poplist.map((project) => `
<div class="pop-overlay modal-back">
        <div class="pop-up">
            <div class="pop-image"><div class="close-pop-button" ><img src='./images/exit.png'></div><img class='desktop-pop-image' src=${project.img} alt='image of my project'></div>
            <div class='flex-magic'><h2 class="project-name pop-title">${project.name}</h2> <div class="pop-link button-pop-desktop">
            <a href=${project.deployed}><button class="project-button live">See Live <img src='' alt=""></button></a>
            <a href=${project.source}><button class="project-button code">See Source <img src='' alt=""></button></a>
        </div></div>
            <ul class="skills pop-skills"> ${project.skills.map((lang) => `<li>${lang}</li>`).join('')}</ul>
            <p class="pop-desc">${project.desc}</p>        
        <div class="pop-link button-pop-mobile">
                <a href=${project.deployed}><button class="project-button live">See Live <img src='' alt=""></button></a>
                <a href=${project.source}><button class="project-button code">See Source <img src='' alt=""></button></a>
            </div>
        </div>
        </div>
`);

const seeProjectButton = Array.from(document.querySelectorAll('.button-select'));

function checkButton(button) {
  if (button.id === '1') {
    return popupList[0];
  } if (button.id === '2') {
    return popupList[1];
  } if (button.id === '3') {
    return popupList[2];
  } if (button.id === '4') {
    return popupList[3];
  } if (button.id === '5') {
    return popupList[4];
  } if (button.id === '6') {
    return popupList[5];
  }
  return null;
}

function closeModal() {
  const close = document.querySelector('.close-pop-button');
  const modal = document.querySelector('div.modal-back');
  close.addEventListener('click', () => {
    modal.remove();
  });
}
seeProjectButton.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#modal-container').innerHTML += checkButton(button);
    closeModal();
  });
});

const email = document.querySelector('#email');
const form = document.querySelector('#contact-form');
const errorMsg = document.querySelector('#errormsg');
errorMsg.innerHTML = 'Your email address should be in lowercase';
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.classList.replace('d-none', 'd-block');
    setTimeout(() => {
      errorMsg.classList.replace('d-block', 'd-none');
    }, 3000);
  }
});