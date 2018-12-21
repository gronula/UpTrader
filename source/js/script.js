'use strict';

(function () {
  var page = document.body;
  var pageHeader = document.querySelector('.header');
  var headers = document.querySelectorAll('.header__button');
  var main = document.querySelector('.main');
  var tabs = document.querySelectorAll('.tabs__type');
  var tabHeaders = document.querySelectorAll('.tabs__header');
  var tabTitles = document.querySelectorAll('.tabs__title');
  var tabInfos = document.querySelectorAll('.tabs__info');
  var buttons = document.querySelectorAll('.tabs__button');

  var tabsHeaderClickHandler = function (element, header, message) {
    header.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 1199px)').matches) {
        if (!message.classList.contains('tabs__info--opened')) {

          element.classList.add('tabs__type--opened');
          header.classList.add('tabs__header--opened');
          message.classList.add('tabs__info--opened');
        } else {
          page.classList.remove('page--opened');
          element.classList.remove('tabs__type--opened');
          header.classList.remove('tabs__header--opened');
          message.classList.remove('tabs__info--opened');
        }

        buttons.forEach(function (it) {
          it.textContent = 'Открыть счет';
        });
      }
    })
  };

  for (var i = 0; i < tabs.length; i++) {
    tabsHeaderClickHandler(tabs[i], tabHeaders[i], tabInfos[i]);
  }

  var headerClickHandler = function (header, title) {
    header.addEventListener('click', function (evt) {
      page.classList.add('page--opened');
      pageHeader.classList.add('header--closed');
      main.classList.add('main--opened');
      for (var i = 0; i < headers.length; i++) {
        if (evt.target === headers[i]) {
          tabTitles[i].classList.add('tabs__title--active');
          tabInfos[i].classList.add('tabs__info--opened');
        } else {
          tabTitles[i].classList.remove('tabs__title--active');
          tabInfos[i].classList.remove('tabs__info--opened');
        }
      }
    });
    title.addEventListener('click', function (evt) {
      for (var i = 0; i < headers.length; i++) {
        if (evt.target === tabTitles[i]) {
          tabTitles[i].classList.add('tabs__title--active');
          tabInfos[i].classList.add('tabs__info--opened');
        } else {
          tabTitles[i].classList.remove('tabs__title--active');
          tabInfos[i].classList.remove('tabs__info--opened');
        }
      }
    });
  };

  if (window.matchMedia('(min-width: 1200px)').matches) {
    for (var i = 0; i < tabs.length; i++) {
      headerClickHandler(headers[i], tabTitles[i]);
    }
  }
})();
