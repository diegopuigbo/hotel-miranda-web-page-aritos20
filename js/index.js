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
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 1,

    autoplay: {
      delay: 6000
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1000: {
        slidesPerView: 3,
      }
    }
  });

const swiperFacilities = new Swiper(".facilities__swiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },
  });

const swiperMenu = new Swiper(".food-menu__swiper-menu", {
    direction: "horizontal",
    slidesPerView: "1",
  
    navigation: {
      nextEl: ".food-menu__next-button",
      prevEl: ".food-menu__prev-button",
    },

    breakpoints: {
      1000: {
        slidesPerView: 2
      }
    }
  });

  const swiperImgFood = new Swiper(".food-menu__img-food-swiper", {
    spaceBetween: 30,

    autoplay: {
      delay: 5000
    },

    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      1000: {
        slidesPerView: 3
      }
    }
  });

const swiperAboutUsFacilities = new Swiper(".about-us-facilities__swiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },
  });

const swiperAboutUsCounter = new Swiper(".about-us-counter__swiper-hotel-imgs", {
    loop: true,
    spaceBetween: 30,

    autoplay: {
      delay: 5000
    },

    pagination: {
      el: ".swiper-pagination",
    },
  });