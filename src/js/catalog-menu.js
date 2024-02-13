const list = document.querySelector('.catalog-item');

list.addEventListener('click', onOpenModal);

function onOpenModal() {
  const catalogMenu = document.querySelector('.catalog-menu');
  catalogMenu.classList.add('catalog-open');
}

// function onCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   catalogMenu.classList.remove('catalog-open');
// }
