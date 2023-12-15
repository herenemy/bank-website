'use strict';

let currentSlide = 0;
const slidesNumber = slides.length;

const createDots = function () {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}">`
    );
  });
};
createDots();

const activateDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const moveToSlide = function (slide) {
  slides.forEach((s, index) => {
    s.style.transform = `translateX(${(index - slide) * 100}%)`;
  });
};
moveToSlide(0);
activateDots(currentSlide);

const nextSlide = function () {
  if (currentSlide === slidesNumber - 1) currentSlide = 0;
  else currentSlide++;

  moveToSlide(currentSlide);
  activateDots(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) currentSlide = slidesNumber - 1;
  else currentSlide--;

  moveToSlide(currentSlide);
  activateDots(currentSlide);
};

sliderBtnRight.addEventListener('click', nextSlide);

sliderBtnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') previousSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    moveToSlide(slide);
    activateDots(slide);
  }
});
