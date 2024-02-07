(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('[data-menu]');
  mobileMenu.classList.toggle('is-open');
}

const menuLinks = document.querySelectorAll('#mobile-menu a');

menuLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');

    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
    });

    // Закриття мобільного меню
    toggleMobileMenu();
  });
});
