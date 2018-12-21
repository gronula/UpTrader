'use strict';

(function () {
  var page = document.body;
  var tab = document.querySelectorAll('.tabs__type');
  var header = document.querySelectorAll('.tabs__header');
  var info = document.querySelectorAll('.tabs__info');
  var button = document.querySelectorAll('.tabs__button');

  var tabsClickHandler = function (element, title, message) {
    title.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 768px)').matches) {
        if (!message.classList.contains('tabs__info--opened')) {
          page.classList.add('page--opened');
          element.classList.add('tabs__type--opened');
          title.classList.add('tabs__header--opened');
          message.classList.add('tabs__info--opened');
        } else {
          page.classList.remove('page--opened');
          element.classList.remove('tabs__type--opened');
          title.classList.remove('tabs__header--opened');
          message.classList.remove('tabs__info--opened');
        }

        button.forEach(function (it) {
          it.textContent = 'Открыть счет';
        });
      }
    })
  };

  for (var i = 0; i < tab.length; i++) {
    tabsClickHandler(tab[i], header[i], info[i]);
  }
})();
