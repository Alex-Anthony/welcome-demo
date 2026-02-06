document.addEventListener('DOMContentLoaded', () => {
  // ---------- Core DOM ----------
  const body = document.body;

  // Mobile nav
  const hamburger = document.querySelector('#hamburger');
  const navBar = document.querySelector('#mobile-navbar');
  const headline = document.querySelector('#headline');

  // Projects + popup
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

  // ---------- Data ----------
  const projectCards = [
    {
      name: 'Artist Portfolio — Figma UI Mockup',
      description:
        'Portfolio website concept for a digital artist: bold hero, character-focused gallery layout, and a clean navigation flow optimized for showcasing portrait work.',
      image: './images/VIVIPOrt.png',
      technologies: ['Figma', 'UI Design', 'Typography', 'Layout'],
      company: 'Client Mockup',
      type: 'UI / Portfolio',
      year: '2025',
      'live link':
        'https://www.figma.com/proto/DzyPgbhChVEae7884CSSeg/DraftOne?node-id=0-1&t=RZc3meqzKPadbjnk-1',
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
      name: 'NYC Property Valuation Dashboard — Product UI',
      description:
        'Designed a decision-support dashboard to visualize simulated tax scenarios and borough-level volatility. Built interactive wireframes and high-fidelity Figma prototypes focused on clarity, accessibility, and policy insight for non-technical stakeholders.',
      image: './images/project-nyc-ui.svg',
      technologies: ['Figma', 'UX Research', 'Dashboards', 'Data Viz', 'Product Design'],
      company: 'Product / Analytics',
      type: 'UI / Design',
      year: '2026',
      'live link':
        'https://www.figma.com/design/rVIXTO9Z9uJnxOhFaHh0q9/IDE490?node-id=0-1&t=yA4fpwxLTVCZ4Cer-1',
      'source link': '#',
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
    {
      name: 'EEG Translation → Avatar Command System',
      description:
        'An EEG-to-intent translation prototype that maps specific mental states into actionable commands. I focused on the “augmented output” layer: turning deep learning model outputs into reliable in-app actions that drive an avatar (VR/AR + gaming-style controls).',
      image: './images/project-eeg.svg',
      technologies: ['Figma', 'GitHub', 'Deep Learning', 'HCI', 'Prototyping'],
      company: 'Research / Prototype',
      type: 'UI + Systems',
      year: '2025–2026',
      'live link':
        'https://www.figma.com/design/BfEPkZ5Nt219JJT9vtkIIr/Analytics-%E2%80%94-Landing-Page-Design--Community-?node-id=0-1&t=Rla1uhyUrRjcEVuC-1',
      'source link': 'https://github.com/Alex-Anthony/CS-SSW-555-Team-13-TechTitans-Project2',
    },
    {
      name: 'Continuous Blood Pressure Monitoring (REU Poster)',
      description:
        'Research poster on continuous BP estimation using pulse wave velocity (PWV) measured at the dorsalis pedis artery with a small-footprint piezoresistive pressure sensor + Arduino-based real-time processing (smoothing + peak detection).',
      image: './images/project-bp-poster.svg',
      technologies: ['Research', 'Arduino', 'Signal Processing', 'Sensors', 'Poster Design'],
      company: 'FIU / NSF REU',
      type: 'BioSensing',
      year: '2024',
      'live link': './images/Poster-REU-2.pdf',
      'source link':
        'https://github.com/Alex-Anthony/Cufless-Blood-Pressure-Monitoring-Research-Collection',
    },
  ];

  // ---------- Mobile Nav Wiring (guarded) ----------
  if (hamburger && navBar && headline) {
    hamburger.addEventListener('click', () => {
      headline.classList.toggle('active');
      hamburger.classList.toggle('active');
      navBar.classList.toggle('active');
      body.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        headline.classList.remove('active');
        hamburger.classList.remove('active');
        navBar.classList.remove('active');
        body.classList.remove('active');
      });
    });
  } else {
    console.warn('Nav elements missing (#hamburger/#mobile-navbar/#headline). Skipping nav wiring.');
  }

  // ---------- Render Project Cards ----------
  if (!projectsDiv) {
    console.error('Missing #works container. Cards cannot render.');
  } else {
    console.log('Rendering cards...', projectCards.length);

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
            ${(project.technologies || []).map((tech) => `<li class='language'>${tech}</li>`).join('')}
          </ul>

          <button class="enabled-btn">See Project</button>
        </div>
      `;
      projectsDiv.appendChild(projectCard);
    });
  }

  // ---------- Popup (guarded) ----------
  const popupReady =
    popupOverlay &&
    closeBtn &&
    popupHeader &&
    popupImg &&
    popupDescription &&
    liveLink &&
    sourceLink &&
    skillsList &&
    popupBg;

  if (popupReady && projectsDiv) {
    const ul = document.createElement('ul');
    ul.className = 'project-languages';
    skillsList.prepend(ul);

    function populatePopupWindow(index) {
      ul.innerHTML = '';
      const p = projectCards[index];
      if (!p) return;

      popupHeader.innerText = p.name;
      popupImg.src = p.image;
      popupDescription.innerText = p.description;

      (p.technologies || []).forEach((skill) => {
        const li = document.createElement('li');
        li.className = 'language';
        li.innerText = skill;
        ul.appendChild(li);
      });

      liveLink.href = p['live link'] || '#';
      sourceLink.href = p['source link'] || '#';
    }

    const projectBtn = document.querySelectorAll('.project .enabled-btn');
    projectBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        popupOverlay.classList.add('active');
        body.classList.add('active');
        popupBg.classList.add('active');
        populatePopupWindow(Array.prototype.indexOf.call(projectBtn, btn));
      });
    });

    closeBtn.addEventListener('click', () => {
      popupOverlay.classList.remove('active');
      body.classList.remove('active');
      popupBg.classList.remove('active');
    });
  } else {
    console.warn('Popup elements missing — skipping popup wiring.');
  }

  // ---------- Skills accordion (guarded) ----------
  const skillsRoot = document.querySelector('#skills');
  if (skillsRoot) {
    document.querySelectorAll('#skills .skill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const panel = btn.closest('li')?.nextElementSibling;
        if (!panel) return;

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
  }
});
