'use strict';

modalOpenBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

const hideModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', hideModalWindow);
modalCloseBtn.addEventListener('click', hideModalWindow);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hideModalWindow();
  }
});
