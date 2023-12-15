'use strict';

const addOpacity = function (e, op) {
  if (e.target.closest('.nav__link')) {
    const linkOver = e.target,
      navLinks = linkOver.closest('.nav__links').querySelectorAll('.nav__link'),
      logoImg = linkOver.closest('.nav').querySelector('img'),
      logoText = linkOver.closest('.nav').querySelector('.nav__text');

    navLinks.forEach(item => {
      if (linkOver !== item) {
        item.style.opacity = this;
        logoImg.style.opacity = this;
        logoText.style.opacity = this;
      }
    });
  }
};
nav.addEventListener('mouseover', addOpacity.bind(0.4));
nav.addEventListener('mouseout', addOpacity.bind(1));
