const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');

function closeModalHandler() {
  backdrop.classList.remove('is-open');
}

modalCloseBtn.addEventListener('click', closeModalHandler);
backdrop.addEventListener('click', closeModalHandler);
modal.addEventListener('click', function (event) {
  console.log(event);
  event.stopPropagation();
});
