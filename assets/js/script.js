'use strict';
// header-scroll
document.addEventListener('click', (e) => {
    const targetElements = e.target;

    if(targetElements.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }

    if(targetElements.closest('[data-goto]')) {
        if(document.documentElement.classList.contains('menu-open')) {
            document.documentElement.classList.remove('menu-open');
        }

        const goTo = targetElements.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if(goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: 'smooth'
            })
        }
        e.preventDefault();
    }

});



//Зміна background header
const header = document.querySelector('header');

// Функція для зміни фонового кольору заголовка
const changeHeaderBackground = () => {
    if (window.scrollY > 70) {
        header.style.background = 'white';
    } else {
        header.style.background = '';
    }
};

// Перевірка значення window.scrollY при завантаженні сторінки
window.addEventListener('load', changeHeaderBackground);

// Прослуховування події scroll
window.addEventListener('scroll', changeHeaderBackground);



//slider
const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.body-main-block__arrow.swiper-button-next',
      prevEl: '.body-main-block__arrow.swiper-button-prev',
    }
  });

//Tabs
const tabsNavItem = document.querySelectorAll('.nav-tabs__button');
const tabsItem = document.querySelectorAll('.item-tabs');

document.addEventListener('click', (e) => {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if(targetElement.closest('.nav-tabs__button')) {
        tabsNavItem.forEach((tabsNavItem, index) => {
            if(tabsNavItem.classList.contains('active')) {
                currentActiveIndex = index;
            }
            if(tabsNavItem == targetElement) {
                newActiveIndex = index
            }
        })

        tabsNavItem[currentActiveIndex].classList.remove('active');
        targetElement.classList.add('active');

        tabsItem[currentActiveIndex].classList.remove('active');
        tabsItem[newActiveIndex].classList.add('active');

    }
    
    
});

