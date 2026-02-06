const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#mobile-navbar');
const headline = document.querySelector('#headline');

const body = document.querySelector('body');

const projectsDiv = document.getElementById('works');
const popupOverlay = document.querySelector('#popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const popupHeader = document.querySelector('#popup-content h2');
const popupImg = document.querySelector('#popup-img');
const popupDescription = document.querySelector('#popup-description');
const liveLink = document.querySelector('.live-link');
const sourceLink = document.querySelector('.source-link');
const skillsList = document.querySelector('#popup-skills-buttons');
const popupBg = document.querySelector('#popup-bg');

const form = document.querySelector('#contact-form');
const formName = document.querySelector('#name');
const email = document.querySelector('#email');
const formMessage = document.querySelector('#message');
const emailErrorMsg = document.querySelector('#email-error-msg');

const projectCards = [
  {
    name: 'NYC Property Valuation — Monte Carlo + ML Pipeline',
    description:
      'End-to-end valuation analysis using NYC property/tax data, with simulation-driven “future worlds,” model evaluation, and insights on volatility and equity.',
    image: './images/project-nyc-valuation.svg',
    technologies: ['Python', 'Pandas', 'Monte Carlo', 'ML Modeling'],
    company: 'Data / Simulation',
    type: 'Product Analytics',
    year: '2025–2026',
    'live link': '#',
    'source link': '#',
  },
  {
    name: 'Laguna Prototype — Hybrid Drivetrain Decision Support',
    description:
      'Systems + quantitative modeling to support drivetrain decisions (mid-rear engine, sequential gearbox, reverse strategy via mild hybrid). Focus on tradeoffs, constraints, and justification.',
    image: './images/project-laguna-hybrid.svg',
    technologies: ['Systems Modeling', 'Simulation', 'Requirements', 'Trade Studies'],
    company: 'Shoreline Bespoke (Academic/Team)',
    type: 'Engineering Management',
    year: '2024–2025',
    'live link': '#',
    'source link': '#',
  },
  {
    name: 'Smart City Transportation — MBSE (SysML)',
    description:
      'MBSE artifacts including activity flows, internal block structure, and a parametric model to support traceable requirements and design rationale.',
    image: './images/project-smart-city-sysml.svg',
    technologies: ['SysML', 'MBSE', 'Parametrics', 'Architecture'],
    company: 'MBSE Project',
    type: 'Systems / Management',
    year: '2025',
    'live link': '#',
    'source link': '#',
  },
];

hamburger.addEventListener('click', () => {
  headline.classList.toggle('active');
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => link.addEventListener('click', () => {
  headline.classList.remove('active');
  hamburger.classList.remove('active');
  navBar.classList.remove('active');
  body.classList.remove('active');
}));

projectCards.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project';
  projectCard.innerHTML = `
  <img class="project-screenshot" src="${project.image}" alt="screenshot of ${project.name} project">
  <div class="project-div">
    <h2 class="project-title">${project.name}</h2>

    <p class="project-info">
      <span class="project-company">${project.company || 'PROJECT'}</span>
      <span><img src="./images/Counter.png" alt=" "></span>
      <span class="project-type">${project.type || 'UI / Product'}</span>
      <span><img src="./images/Counter.png" alt=" "></span>
      <span class="project-year">${project.year || '2026'}</span>
    </p>

    <p class="project-description">${project.description}</p>

    <ul class="project-languages">
      ${project.technologies.map((tech) => `<li class='language'>${tech}</li>`).join('')}
    </ul>

    <button class="enabled-btn">See Project</button>
  </div>
`;

  projectsDiv.appendChild(projectCard);
});

const ul = document.createElement('ul');
ul.className = 'project-languages';
skillsList.prepend(ul);

function populatePopupWindow(index) {
  ul.innerHTML = '';
  popupHeader.innerText = projectCards[index].name;
  popupImg.src = projectCards[index].image;
  popupDescription.innerText = projectCards[index].description;
  projectCards[index].technologies.forEach((skill) => {
    const li = document.createElement('li');
    li.className = 'language';
    li.innerText = skill;
    ul.appendChild(li);
  });
  liveLink.href = projectCards[index]['live link'];
  sourceLink.href = projectCards[index]['source link'];
}

const projectBtn = document.querySelectorAll('.project .enabled-btn');
projectBtn.forEach((btn) => btn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  body.classList.add('active');
  popupBg.classList.add('active');
  populatePopupWindow(Array.prototype.indexOf.call(projectBtn, btn));
}));

closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
  body.classList.remove('active');
  popupBg.classList.remove('active');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    email.classList.add('active');
    emailErrorMsg.innerText = 'Please enter the e-mail in lowercase';
  }
});

const inputData = {};
const storage = window.localStorage;

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
      || e.code === 1014
      || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

function retrieveFormData() {
  if (storageAvailable('localStorage')) {
    const formDataString = storage.getItem('formData');
    const formData = JSON.parse(formDataString);
    return formData;
  }
  return false;
}

function populateForm() {
  const formData = retrieveFormData();
  if (formData) {
    if (formData.name) {
      formName.value = formData.name;
    }
    if (formData.email) {
      email.value = formData.email;
    }
    if (formData.message) {
      formMessage.value = formData.message;
    }
  }
}
populateForm();

formName.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.message = formMessage.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

email.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.message = formMessage.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

formMessage.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.message = formMessage.value;
  storage.setItem('formData', JSON.stringify(inputData));

});


