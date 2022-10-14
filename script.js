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
    img: './images/project-img.png',
    name: 'Project Name',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    source: '#',
    deployed: '#',
  },
  project2: {
    buttonId: '2',
    img: './images/project-img.png',
    name: 'Project Name',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
    skills: ['CSS', 'JavaScript', 'HTML'],
    source: '#',
    deployed: '#',
  },
  project3: {
    buttonId: '3',
    img: './images/project-img.png',
    name: 'Project Name',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
    skills: ['Ruby on Rails', 'JavaScript', 'HTML'],
    source: '#',
    deployed: '#',
  },
  project4: {
    buttonId: '4',
    img: './images/project-img.png',
    name: 'Project Name',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
    skills: ['Ruby on Rails', 'JavaScript', 'HTML'],
    source: '#',
    deployed: '#',
  },
  project5: {
    buttonId: '5',
    img: './images/project-img.png',
    name: 'Project Name',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
    skills: ['Ruby on Rails', 'JavaScript', 'HTML'],
    source: '#',
    deployed: '#',
  },
  project6: {
    buttonId: '6',
    img: './images/project-img.png',
    name: 'Project Name',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
    skills: ['Ruby on Rails', 'JavaScript', 'HTML'],
    source: '#',
    deployed: '#',
  },
};

const portGenerator = Object.keys(portfolio).reduce((accum, currKey) => `${accum}
  <div class="project-frame flex-container">
  <img class="project-image" src="${portfolio[currKey].img}" alt="project desc">
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
  img: './images/Snapshoot-Portfolio.svg',
  name: 'Project Name',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
  skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  source: '#',
  deployed: '#',
},
{
  buttonId: '2',
  img: './images/Snapshoot-Portfolio.svg',
  name: 'Project Name',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
  skills: ['CSS', 'JavaScript', 'HTML'],
  source: '#',
  deployed: '#',
},
{
  buttonId: '3',
  img: './images/Snapshoot-Portfolio.svg',
  name: 'Project Name',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
  skills: ['Ruby on Rails', 'JavaScript', 'HTML'],
  source: '#',
  deployed: '#',
},
{
  buttonId: '4',
  img: './images/Snapshoot-Portfolio.svg',
  name: 'Project Name',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
  skills: ['Ruby on Rails', 'JavaScript', 'HTML'],
  source: '#',
  deployed: '#',
},
{
  buttonId: '5',
  img: './images/Snapshoot-Portfolio.svg',
  name: 'Project Name',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
  skills: ['Ruby on Rails', 'JavaScript', 'HTML'],
  source: '#',
  deployed: '#',
},
{
  buttonId: '6',
  img: './images/Snapshoot-Portfolio.svg',
  name: 'Project Name',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore accusamus provident, tempora beatae totam, dolore aspernatur deleniti possimus necessitatibus at ducimus porro quaerat commodi doloribus earum optio blanditiis natus.',
  skills: ['Ruby on Rails', 'JavaScript', 'HTML'],
  source: '#',
  deployed: '#',
}];

const popupList = poplist.map((project) => `
<div class="pop-overlay modal-back">
        <div class="pop-up">
            <div class="pop-image"><div class="close-pop-button" ><img src='./images/exit.png'></div><img class='desktop-pop-image' src=${project.img} alt='image of my project'></div>
            <div class='flex-magic'><h2 class="project-name pop-title">${project.name}</h2> <div class="pop-link button-pop-desktop">
            <a href=${project.source}><button class="project-button live">See Live <img src='' alt=""></button></a>
            <a href=${project.deployed}><button class="project-button code">See Source <img src='' alt=""></button></a>
        </div></div>
            <ul class="skills pop-skills"> ${project.skills.map((lang) => `<li>${lang}</li>`).join('')}</ul>
            <p class="pop-desc">${project.desc}</p>        
        <div class="pop-link button-pop-mobile">
                <a href=${project.source}><button class="project-button live">See Live <img src='' alt=""></button></a>
                <a href=${project.deployed}><button class="project-button code">See Source <img src='' alt=""></button></a>
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