const listTable = document.querySelector('.home-table');
const closeButton = document.querySelector('.close-table');
const catalogMenu = document.querySelector('.catalog-menu');

// for each????

listTable.addEventListener('click', onOpenModal);
closeButton.addEventListener('click', onCloseModal);

function onOpenModal() {
  catalogMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
}

function onCloseModal() {
  catalogMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}

const listStellage = document.querySelector('.home-stellage');
const stellMenu = document.querySelector('.stellage-menu');
const closeStellage = document.querySelector('.close-stellage');

listStellage.addEventListener('click', onOpenStellage);
closeStellage.addEventListener('click', onCloseStellage);

function onOpenStellage() {
  stellMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
}
function onCloseStellage() {
  stellMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}

const listInterier = document.querySelector('.home-interier');
const interMenu = document.querySelector('.interier-menu');
const closeInter = document.querySelector('.close-inter');

listInterier.addEventListener('click', onOpenInterier);
closeInter.addEventListener('click', onCloseInterier);

function onOpenInterier() {
  interMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
}
function onCloseInterier() {
  interMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}
