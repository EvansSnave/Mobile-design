const cards = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    FeaturedImage: 'Assests/Snapshoot\ Portfolionature.svg',
    technologies: ['HTML','CSS','Javascript'],
    liveVersion: 'https://example.com',
    source: 'https://example.com',
    subtitle: ['CANOPY','Back End Dev','2015'],
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    FeaturedImage: 'Assests/Snapshoot\ Portfolioart.svg',
    technologies: ['HTML','Ruby on rails','CSS','Javascript'],
    liveVersion: 'https://example.com',
    source: 'https://example.com',
    subtitle: ['Facebook','Full Stack Dev','2015'],
  },
  {
    name: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    FeaturedImage: 'Assests/Snapshoot\ Portfolio.svg',
    technologies: ['HTML','Ruby on rails','CSS','Javascript'],
    liveVersion: 'https://example.com',
    source: 'https://example.com',
    subtitle: ['Facebook','Full Stack Dev','2015'],
  },
  {
    name: 'Uber navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    FeaturedImage: 'Assests/Snapshoot\ Portfolio.svg',
    technologies: ['HTML','Ruby on rails','CSS','Javascript'],
    liveVersion: 'https://example.com',
    source: 'https://example.com',
    subtitle: ['Uber','Lead Developer','2018'],
  },
];

const popUpCard=(card)=> {
  let workSection = document.querySelector('.worksSection');
  let technologies = cards[card].technologies.map((x) => `<li>${x}</li>`).join('');
  const subtitles = cards[card].subtitle.map(x => `<li>${x}</li>`);
  let Html1 = `
    <div class="space"></div>
    <div class="firstCard">
      <div class="snapshot snapshots"></div>
      <div class="section2">
        <h3 class="tonic">${cards[card].name}</h3>
        <ul class="canopyList">
          <li class="canopy">${subtitles[0]}</li>
          <li class="counter"><img src="Assests/Countercounter.svg"></img></li>
          <li class="backEnd">${subtitles[1]}</li>
          <li class="counter"><img src="Assests/Countercounter.svg"></img></li>
          <li class="year">${subtitles[2]}</li>
        </ul>
        <p class="description">${cards[card].description}</p>
        <ul class="works">
          ${technologies}
        </ul>
        <div class="btns">
          <a href="${cards[card].liveVersion}" class="btn">See live</a>
          <a href="${cards[card].source}" class="btn">See source</a>
        </div>
        <button class="seeProject">See project</button>
      </div>
    </div>
    <div class="space"></div>
  `;
  workSection.insertAdjacentHTML('afterbegin', Html1);
}

const createSection = ()=>{
  let section = document.querySelector(".worksSection");
  for (let card = cards.length -1; card >= 0; card -=1){
    let technologies = cards[card].technologies.map((x) => `<li class="buttons">${x}</li>`).join('');
    const subtitles = cards[card].subtitle.map(x => `<li>${x}</li>`);
    let created = `
    <div class="space"></div>
    <div class="firstCard">
      <div class="snapshot snapshots"></div>
      <div class="section2">
        <h3 class="tonic">${cards[card].name}</h3>
        <ul class="canopyList">
          <li class="canopy">${subtitles[0]}</li>
          <li class="counter"><img src="Assests/Countercounter.svg"></img></li>
          <li class="backEnd">${subtitles[1]}</li>
          <li class="counter"><img src="Assests/Countercounter.svg"></img></li>
          <li class="year">${subtitles[2]}</li>
        </ul>
        <p class="description">${cards[card].description}</p>
        <ul class="works">
          ${technologies}
        </ul>
        <button class="seeProject">See project</button>
      </div>
    </div>
    <div class="space"></div>
    `;
    section.insertAdjacentHTML('afterbegin', created);
  }
};

document.addEventListener('DOMContentLoaded', ()=>{
  createSection();
  document.querySelectorAll('.worksSection .btn').forEach((btn, card) => {
    btn.addEventListener('click', () => {
      popUpCard(card);
    });
  });
});
