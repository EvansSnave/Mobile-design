const projects = [
  {
    name: 'Tonic',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_screenshots/Snapshoot Portfolio.svg',
    technologies: ['Node.js', 'Express.js', 'JWT', 'Redis'],
    liveLink: 'https://example.com',
    sourceLink: '',
    projectCover: './images/project_screenshots/Snapshoot Portfolio.svg',
    fullDescription: `Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.`,
    canopy: ['Back End Dev', 2015],
  },
  {
    name: 'Multi-Post Stories',
    description:"Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    image: './images/project_screenshots/Snapshoot Portfolio (1).svg',
    technologies: ['Node.js', 'TypeScript', 'Docker'],
    liveLink: 'https://example.com',
    sourceLink: '',
    projectCover: './images/project_screenshots/Snapshoot Portfolio (1).svg',
    fullDescription: `Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.`,
    canopy: ['Back End Dev', 2015],
  },
];

function openPopup(index) {
  const section = document.querySelector('.work');
  const overlay = document.querySelector('.overlay');
  const technologiesList = projects[index].technologies.map((tech) => `<li>${tech}</li>`).join('');
  const canopyList = projects[index].canopy.map((elem) => `<li>${elem}</li>`).join('');
  const popupHtml = `
        <div class="popup">
            <h3 class="popup__name">${projects[index].name}</h3>
            <button type="button" class="popup__exit">
                <img src="images/icons8-close_black.svg" alt="">
            </button>
            <div class="card__canopy-header popup__canopy">
                <h4 class="card__canopy-title">CANOPY</h4>
                <ul class="card__canopy-list popup__canopy-list">
                    ${canopyList}
                </ul>
            </div>
            <img src="./images/desktop/Snapshoot Portfolio.svg" alt="" class="popup__img">
            <div class="popup__details">
                <p class="popup__description">
                    ${projects[index].fullDescription}
                </p>
                <div class="popup__tech-buttons">
                    <ul class="card__list popup__tech">
                        ${technologiesList}
                    </ul>
                    <div class="gray-line"></div>
                    <div class="popup__buttons">
                        <a href="${projects[index].liveLink}" class="btn btn--green" target="_blank">See Live
                                <img src="images/see-live-icon.svg" alt=""></a>
                        <a href="${projects[index].sourceLink}" class="btn btn--green" target="_blank">See Source 
                                <img src="images/see-source-icon.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    `;

  section.insertAdjacentHTML('afterbegin', popupHtml);
  overlay.classList.remove('hidden');
  const closePopupIcon = document.querySelector('.popup__exit');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');
  body.classList.add('popup-open');
  closePopupIcon.addEventListener('click', () => {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
    body.classList.remove('popup-open');
  });
}

function createCard() {
  const cardContainer = document.querySelector('.card__container');
  for (let index = projects.length - 1; index >= 0; index -= 1) {
    const project = projects[index];
    const technologiesList = project.technologies.map((tech) => `<li>${tech}</li>`).join('');
    const card = `
            <li class="card">
                <div class="card__imgbox">
                    <img src="${project.projectCover}" alt="Lock-app"
                     class="card__img">
                </div>
                <div class="card__details">
                    <h3 class="card__text">${project.name}</h3>
                    <div class="card__canopy">
                        <div class="card__canopy-header">
                            <h4 class="card__canopy-title">CANOPY</h4>
                            <ul class="card__canopy-list">
                                <li>Backed Dev</li>
                                <li>2023</li>
                            </ul>
                        </div>
                    <p class="card__canopy-text">${project.description}</p>
                    </div>
                    <ul class="card__list">
                         ${technologiesList}
                    </ul>
                    <button
                        class="btn btn--green car__btn">See
                        Project</button>
                        </div>
                        </li>`;
    cardContainer.insertAdjacentHTML('afterbegin', card);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createCard();
  document.querySelectorAll('.work .btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      openPopup(index);
    });
  });
});