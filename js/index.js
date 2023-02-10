const xMenu = document.querySelector('.header__x-menu');
const dropDownMenu = document.querySelector('.header__dropdown-menu');
const burgerMenu = document.querySelector('.header__burger-menu');

burgerMenu.addEventListener('click', () => {
  xMenu.classList.toggle('active');
  dropDownMenu.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

xMenu.addEventListener('click', () => {
  xMenu.classList.toggle('active');
  dropDownMenu.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

const swiper = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const swiperFacilities = new Swiper(".facilities__swiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },
  });