const xMenu = document.querySelector('.header__x-menu');
const dropDownMenu = document.querySelector('.header__dropdown-menu');
const burgerMenu = document.querySelector('.header__burger-menu');

burgerMenu.addEventListener('click', () => {
  xMenu.classList.toggle('active');
  dropDownMenu.classList.toggle('active');
  burgerMenu.classList.toggle('active');
})

xMenu.addEventListener('click', () => {
  xMenu.classList.toggle('active');
  dropDownMenu.classList.toggle('active');
  burgerMenu.classList.toggle('active');
})



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });