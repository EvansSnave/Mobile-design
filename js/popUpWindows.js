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
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    FeaturedImage: 'Assests/Snapshoot\ Portfolio.svg',
    technologies: ['HTML','CSS','Javascript'],
    liveVersion: 'https://example.com',
    source: 'https://example.com',
    subtitle: ['Facebook','Back End Dev','2015'],
  },
];

const PopUp=(card)=> {
  let workSection = document.querySelector('.worksSection');
  let cardContainer = document.querySelector('.cardContainer');
  const technologies = cards[card].technologies.map((x) => `<li>${x}</li>`);
  let subtitles = cards[card].subtitle.map(x => `<li>${x}</li>`).join('');
  let Html = `
    <div class="space"></div>
    <div class="firstCard">
      <div class="snapshot snapshots"></div>
      <div class="section2">
        <h3 class="tonic">${cards[card].name}</h3>
        <ul class="canopyList">
          <li class="canopy">${technologies[0]}</li>
          <li class="counter"><img src="Assests/Countercounter.svg"></img></li>
          <li class="backEnd">${technologies[1]}</li>
          <li class="counter"><img src="Assests/Countercounter.svg"></img></li>
          <li class="year">${technologies[2]}</li>
        </ul>
        <p class="description">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
        <div class="works">
          <button class="htmlButton buttons"></button>
          <button class="cssButton buttons"></button>
          <button class="jsButton buttons"></button>
        </div>
        <button class="seeProject">See project</button></div>
    </div>
    <div class="space"></div>
  `;
}
