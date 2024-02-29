const openPopup = document.querySelector('.btn-submit');
const openPopupMob = document.querySelector('.btn-submit-mob');
const submitPopup = document.querySelector('.backdrop');
const closePopup = document.querySelector('.popup-close-btn');

openPopup.addEventListener('click', onOpenPopup);
openPopupMob.addEventListener('click', onOpenPopup);
closePopup.addEventListener('click', onClosePopup);

function onOpenPopup() {
  submitPopup.classList.remove('is-hidden');
}

function onClosePopup() {
  submitPopup.classList.add('is-hidden');
}
