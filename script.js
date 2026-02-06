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
  name: 'Artist Portfolio — Figma UI Mockup',
  description:
    'Portfolio website concept for a digital artist: bold hero, character-focused gallery layout, and a clean navigation flow optimized for showcasing portrait work.',
  image: './images/VIVIPOrt.png', // screenshot of your mockup
  technologies: ['Figma', 'UI Design', 'Typography', 'Layout'],
  company: 'Client Mockup',
  type: 'UI / Portfolio',
  year: '2025',
  'live link': 'https://www.figma.com/proto/DzyPgbhChVEae7884CSSeg/DraftOne?node-id=0-1&t=RZc3meqzKPadbjnk-1',
  'source link': 'https://github.com/Alex-Anthony',
},

  {
    name: 'NYC Property Valuation — Monte Carlo + ML Pipeline',
    description:
      'End-to-end valuation analysis using NYC property/tax data, with simulation-driven “future worlds,” model evaluation, and insights on volatility and equity.',
    image: './images/project-nyc-valuation.png',
    technologies: ['Python', 'Pandas', 'Monte Carlo', 'ML Modeling'],
    company: 'Data / Simulation',
    type: 'Product Analytics',
    year: '2023–2024',
    'live link': './images/_ISE490__Real_Estate_Prediction_in_NYC.pdf',
    'source link': 'https://github.com/Alex-Anthony/NYC-Real-Estate-Valuation-Model',
  },
  {
    name: 'Laguna Prototype — Hybrid Drivetrain Decision Support',
    description:
      'Systems + quantitative modeling to support drivetrain decisions (mid-rear engine, sequential gearbox, reverse strategy via mild hybrid). Focus on tradeoffs, constraints, and justification.',
    image: './images/Shoreline.png',
    technologies: ['Systems Modeling', 'Simulation', 'Requirements', 'Trade Studies'],
    company: 'Shoreline Bespoke (Academic/Team)',
    type: 'Engineering Management',
    year: '2024–2025',
    'live link': './images/EXPO25PosterFinalDrive.pdf',
    'source link': './images/SolidSS.png',
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

// Skills accordion (matches existing tab visuals)
document.querySelectorAll('#skills .skill-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = btn.closest('li').nextElementSibling; // .skill-panel
    const isOpen = panel.classList.contains('open');

    // close all
    document.querySelectorAll('#skills .skill-panel').forEach((p) => p.classList.remove('open'));
    document.querySelectorAll('#skills .skill-btn').forEach((b) => {
      b.setAttribute('aria-expanded', 'false');
      const icon = b.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-chevron-right';
    });

    // open clicked
    if (!isOpen) {
      panel.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-chevron-down';
    }
  });
});








