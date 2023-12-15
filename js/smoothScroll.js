'use strict';

// Learn more button scroll
document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });
  });

// Scroll from nav to sections
nav.addEventListener('click', function (e) {
  const currentTarget = e.target;
  if (currentTarget.classList.contains('nav__link--nav')) {
    e.preventDefault();
    const href = currentTarget.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});
