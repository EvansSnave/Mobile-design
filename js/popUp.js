let y = [
  {
    name: 'Tonic',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_screenshots/Snapshoot Portfolio.svg',
    technologies: ['Html', 'Ruby on rails', 'css', 'javaScript'],
    live: 'https://example.com',
    source: 'https://github.com/EvansSnave/Mobile-design/tree/main',
    imageS: './images/project_screenshots/Snapshoot Portfolio.svg',
    description: `Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.`,
    canopy: ['Full Stack Dev', 2015],
  },
  {
    name: 'Multi-Post Stories',
    description:"Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    image: './images/project_screenshots/Snapshoot Portfolio (1).svg',
    technologies: ['Html', 'Ruby on rails', 'css', 'javaScript'],
    live: 'https://example.com',
    source: 'https://github.com/EvansSnave/Mobile-design/tree/main',
    imageS: './images/project_screenshots/Snapshoot Portfolio (1).svg',
    description: `Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.`,
    canopy: ['Back End Dev', 2015],
  },
];

function cardcreation() {
  let cardContainer = document.querySelector('.card__container');
  for (let index = y.length - 1; index >= 0; index -= 1) {
    let project = y[index];
    let list = project.technologies.map((tech) => `<li>${tech}</li>`).join('');
    let card = `<li class="card">
                <div class="card__imgbox">
                    <img src="${project.imageS}" alt="Lock-app"
                     class="card__img">
                </div>
                <div class="card__details">
                    <h3 class="card__text">${project.name}</h3>
                    <div class="card__canopy">
                        <div class="card__canopy-header">
                            <h4 class="card__canopy-title">CANOPY</h4>
                            <ul class="card__canopy-list">
                                <li>Backed Dev</li>
                                <li>2015</li>
                            </ul>
                        </div>
                    <p class="card__canopy-text">${project.description}</p>
                    </div>
                    <ul class="card__list">${list}</ul>
                    <button
                        class="btn btn--green car__btn">See
                        Project</button>
                        </div>
                        </li>`;
    cardContainer.insertAdjacentHTML('afterbegin', card);
  }
}

function pops(index) {
  let www = document.querySelector('.work');
  let overlay = document.querySelector('.overlay');
  let list = y[index].technologies.map((tech) => `<li>${tech}</li>`).join('');
  let canop = y[index].canopy.map((elem) => `<li>${elem}</li>`).join('');
  let htm = `
        <div class="qwq">
            <h3 class="qwq__name">${y[index].name}</h3>
            <button type="button" class="qwq__exit">
                <img src="images/icons8-close_black.svg" alt="">
            </button>
            <div class="card__canopy-header qwq__canopy">
                <h4 class="card__canopy-title">CANOPY</h4>
                <ul class="card__canopy-list qwq__canopy-list">
                    ${canop}
                </ul>
            </div>
            <img src="./images/desktop/Snapshoot Portfolio.svg" alt="" class="qwq__img">
            <div class="qwq__details">
                <p class="qwq__description">
                    ${y[index].description}
                </p>
                <div class="qwq__tech-buttons">
                    <ul class="card__list qwq__tech">
                        ${list}
                    </ul>
                    <div class="gray-line"></div>
                    <div class="qwq__buttons">
                        <a href="${y[index].live}" class="btn btn--green" target="_blank">See Live
                                <img src="images/see-live-icon.svg" alt=""></a>
                        <a href="${y[index].source}" class="btn btn--green" target="_blank">See Source 
                                <img src="images/see-source-icon.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    `;

  www.insertAdjacentHTML('afterbegin', htm);
  overlay.classList.remove('hidden');
  let closedS = document.querySelector('.qwq__exit');
  let qwq = document.querySelector('.qwq');
  let body = document.querySelector('body');
  body.classList.add('qwq-open');
  closedS.addEventListener('click', () => {
    qwq.classList.add('hidden');
    overlay.classList.add('hidden');
    body.classList.remove('qwq-open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cardcreation();
  document.querySelectorAll('.work .btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      pops(index);
    });
  });
});