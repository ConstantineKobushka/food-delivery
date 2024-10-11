document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileCloseBtn = document.querySelector('.mobile-close-btn');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileNav = document.querySelector('.mobile-nav');

  const orderBtns = document.querySelectorAll('.order-btn');
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  function openMobileMenuHandler() {
    mobileOverlay.classList.add('is-open');
    mobileNav.classList.add('is-open');
  }

  function closeMobileMenuHandler() {
    mobileOverlay.classList.remove('is-open');
    mobileNav.classList.remove('is-open');
  }

  function openModalHandler() {
    backdrop.classList.add('is-open');
  }

  function closeModalHandler() {
    backdrop.classList.remove('is-open');
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function scrollToSection(event) {
    if (event.target.classList.contains('mobile-nav--link')) {
      event.preventDefault();

      const targetId = event.target.getAttribute('href');

      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: targetPosition - 80,
            behavior: 'smooth',
          });
        }
      }

      closeMobileMenuHandler();
    }
  }

  burgerBtn.addEventListener('click', openMobileMenuHandler);
  mobileCloseBtn.addEventListener('click', closeMobileMenuHandler);
  mobileOverlay.addEventListener('click', closeMobileMenuHandler);
  mobileNav.addEventListener('click', stopPropagation);
  mobileNav.addEventListener('click', scrollToSection);

  orderBtns.forEach((orderBtn) => orderBtn.addEventListener('click', openModalHandler));
  modalCloseBtn.addEventListener('click', closeModalHandler);
  backdrop.addEventListener('click', closeModalHandler);

  modal.addEventListener('click', stopPropagation);
});
