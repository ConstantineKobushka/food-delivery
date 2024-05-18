const burgerBtn = document.querySelector('.burger-btn');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const ordeBtns = document.querySelectorAll('.order-btn');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');

function openMobileMenuHandler() {
  mobileNav.classList.add('is-open');
}

function closeMomobileMenuHandler() {
  mobileNav.classList.remove('is-open');
}

function openModalHandler() {
  backdrop.classList.add('is-open');
}

function closeModalHandler() {
  backdrop.classList.remove('is-open');
}

burgerBtn.addEventListener('click', openMobileMenuHandler);
mobileCloseBtn.addEventListener('click', closeMomobileMenuHandler);
ordeBtns.forEach((orderBtn) => orderBtn.addEventListener('click', openModalHandler));
modalCloseBtn.addEventListener('click', closeModalHandler);
backdrop.addEventListener('click', closeModalHandler);
modal.addEventListener('click', function (event) {
  event.stopPropagation();
});
