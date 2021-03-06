const more = document.getElementById('more-btn');
const less = document.querySelector('#less-btn');

const coaches = [
  {
    className: 'ft-speakers',
    coachImage: './icon/benkler.jpg',
    coachName: 'Yochai Benkler',
    firstPgrph: 'Berckman professor of entrepreneurial legal studies at Harvard Law school.',
    secondPgrph: 'Benkler studies common-based peer production amd published his seminal book The wealth of Networks in 2006.',
  },

  {
    className: 'ft-speakers',
    coachImage: './icon/kilnam.jpg',
    coachName: 'Kilnam Chon',
    secondPgrph: 'Kihlm Chon helped bring the intenet to Asia and is an Outspoken advocate for the open web and  digital commons, in 2012  , he was induced into the inaugural class of the internet Society (ISOC) internet Hall of Fame.',
  },

  {
    className: 'ft-speakers-hdn',
    coachImage: './icon/sohyeong.png',
    coachName: 'SohYeong Noh',
    firstPgrph: 'Direction of Art  Center Nabi a board member of The Ideal Man community',
    secondPgrph: 'As the main venue for new media art production  in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and arts.',
  },

  {
    className: 'ft-speakers-hdn',
    coachImage: './icon/julia.jpg',
    coachName: 'Julia Leda',
    firstPgrph: 'President of young pirates of Europe',
    secondPgrph: 'Benkler studies common-based peer production amd published his seminal book The wealth of Networks in 2006.',
  },

  {
    className: 'ft-speakers-hdn',
    coachImage: './icon/tretikov.jpeg',
    coachName: 'Lila Tretikov',
    firstPgrph: 'Executive Director of the Wikimedia Foundation',
    secondPgrph: 'Lila Tretikov  is Executive Director of the Wikipedia Foundation, the nonprofit organization that operates Wikipedia is freely available in 290 languages.',
  },

  {
    className: 'ft-speakers-hdn',
    coachImage: './icon/merkley.jpg',
    coachName: 'Ryan Merkley',
    firstPgrph: 'CEO of Creative Commons ex CEO of the Mozilla Foundation',
    secondPgrph: 'Ryan had been leading open source projects at the Mozilla Foundation as the open source movement.',
  },
];

const coachesInfo = document.getElementById('coachesInfo');
const coachSection = coaches.map((card, index) => `<div class="${card.className}">
<div>
    <img src="${card.coachImage}" alt="Yochai benkler" width="100px" height="100px">
</div>
<div class="ft-speaker">
    <h3>${card.coachName}</h3>
    <p class="ft-prgph1">${card.firstPgrph}</p>
    <span class="line"></span>
    <p class="ft-prgph2">${card.secondPgrph}</p>
</div>
</div>
`).join('');

coachesInfo.innerHTML += coachSection;

const show = document.querySelectorAll('.ft-speakers-hdn');
console.log(show.length);

function showMore() {
  for (let i = 0; i <= show.length; i++) {
    show[i].style.display = 'flex';
    more.style.display = 'none';
    less.style.display = 'flex';
  }
}

function showLess() {
  for (let i = 0; i <= show.length; i++) {
    show[i].style.display = 'none';
    more.style.display = 'flex';
    less.style.display = 'none';
  }
}

more.addEventListener('click', showMore);

less.addEventListener('click', showLess);

// const hamburger = document.getElementById('link_menu');
const html = document.getElementsByTagName('html')[0];
const navBar = document.getElementById('nav_bar');
const list = document.getElementById('nav_ul');

const iconMenu = document.querySelector('.menu-icon');
const iconClose = document.querySelector('.menu-icon2');

function HideNav() {
  console.log('hiden');
  navBar.classList.remove('open');
  navBar.classList.add('hide');
  iconMenu.style.display = 'flex';
  iconMenu.classList.add('active');
  iconClose.classList.remove('active');
  html.style.overflow = 'auto';
}

function showNav() {
  console.log('shown');
  navBar.classList.remove('hide');
  navBar.classList.add('open');
  iconMenu.style.display = 'none';
  iconMenu.classList.remove('active');
  iconClose.classList.add('active');
  html.style.overflow = 'hidden';
}

iconMenu.addEventListener('click', showNav);
iconClose.addEventListener('click', HideNav);

function fun() {
  location.reload();
}