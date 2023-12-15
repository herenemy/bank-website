'use strict';

operationsTabContainer.addEventListener('click', function (e) {
  const currentTarget = e.target;

  if (currentTarget.classList.contains('operations__tab')) {
    document
      .querySelectorAll('.operations__tab')
      .forEach(btn => btn.classList.remove('operations__tab--active'));
    currentTarget.classList.add('operations__tab--active');

    document
      .querySelectorAll('.operations__content')
      .forEach(tab => tab.classList.remove('operations__content--active'));

    document
      .querySelector(`.operations__content--${currentTarget.dataset.tab}`)
      .classList.add('operations__content--active');
  }
});
