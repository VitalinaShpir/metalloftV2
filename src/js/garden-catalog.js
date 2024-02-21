const listBench = document.querySelector('.garden-table');
const closeBench = document.querySelector('.close-bench');
const benchMenu = document.querySelector('.garden-bench');

listBench.addEventListener('click', onOpenBench);
closeBench.addEventListener('click', onCloseBench);

function onOpenBench() {
  benchMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
}

function onCloseBench() {
  benchMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}

// for garden barbeque

const listBarbeque = document.querySelector('.garden-barbeque');
const closeBarbeque = document.querySelector('.close-barbeque');
const barbequeMenu = document.querySelector('.barbeque');

listBarbeque.addEventListener('click', onOpenBarbeque);
closeBarbeque.addEventListener('click', onCloseBarbeque);

function onOpenBarbeque() {
  barbequeMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
}

function onCloseBarbeque() {
  barbequeMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}

// for garden swing

const listSwing = document.querySelector('.garden-swing');
const closeSwing = document.querySelector('.close-swing');
const swingMenu = document.querySelector('.swing');

listSwing.addEventListener('click', onOpenSwing);
closeSwing.addEventListener('click', onCloseSwing);

function onOpenSwing() {
  swingMenu.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
}

function onCloseSwing() {
  swingMenu.classList.remove('catalog-open');
  document.body.style.overflow = 'auto';
}
