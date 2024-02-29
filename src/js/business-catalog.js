const listBar = document.querySelector('.business-bar');
const closeBar = document.querySelector('.close-bar');
const barMenu = document.querySelector('.bar-menu');
const btnUpRef = document.querySelector('.btn_up');

listBar.addEventListener('click', onOpenBar);
closeBar.addEventListener('click', onCloseBar);

function onOpenBar() {
  barMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
  btnUpRef.classList.add('hide-btn_up');
}

function onCloseBar() {
  barMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}

// for shells catalog

const listShells = document.querySelector('.business-shell');
const closeShells = document.querySelector('.close-shells');
const shellsMenu = document.querySelector('.bus-shells');

listShells.addEventListener('click', onOpenShells);
closeShells.addEventListener('click', onCloseShells);

function onOpenShells() {
  shellsMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
  btnUpRef.classList.add('hide-btn_up');
}

function onCloseShells() {
  shellsMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}

// for hangers catalog

const listHanger = document.querySelector('.business-hanger');
const closeHanger = document.querySelector('.close-hangers');
const hangerMenu = document.querySelector('.hangers');

listHanger.addEventListener('click', onOpenHanger);
closeHanger.addEventListener('click', onCloseHanger);

function onOpenHanger() {
  hangerMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
  btnUpRef.classList.add('hide-btn_up');
}

function onCloseHanger() {
  hangerMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}
