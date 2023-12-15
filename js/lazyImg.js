'use strict';

const lazyImg = function (entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.classList.remove('lazy-img');
    entry.target.src = entry.target.dataset.src;
    observer.unobserve(entry.target);
  }
};

const lazyImgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0.2,
});
servicesImg.forEach(img => lazyImgObserver.observe(img));
