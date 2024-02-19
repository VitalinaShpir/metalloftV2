const listTable = document.querySelector('.home-table');

listTable.addEventListener('click', onOpenModal);

function onOpenModal() {
  const catalogMenu = document.querySelector('.catalog-menu');
  catalogMenu.classList.add('catalog-open');
}

// function onCloseModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   catalogMenu.classList.remove('catalog-open');
// }

const listStellage = document.querySelector('.home-stellage');

listStellage.addEventListener('click', onOpenStellage);

function onOpenStellage() {
  const stellMenu = document.querySelector('.stellage-menu');

  console.log('<<<===============>>>');
  console.log(stellMenu);
  console.log('<<<===============>>>');
  stellMenu.classList.add('catalog-open');
}
