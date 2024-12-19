// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".burger__menu");
const menuLinks = document.querySelectorAll(".burger__link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

//tabs

const tabs = document.querySelectorAll(".services__tabs--item");
const content = document.querySelectorAll(".services__team");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    content.forEach((content) => {
      content.classList.remove("visible");
    });
    content[index].classList.add("visible");
  });
});

// Slider
const portfolioSlider = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".portfolio__slider--next",
    prevEl: ".portfolio__slider--prev",
  },

  breakpoints: {
    1024: {
      spaceBetween: 25,
    },
    768: {
      spaceBetween: 10,
    },
  },
});

const openButtons = document.querySelectorAll(".open");
const modal = document.querySelector(".modal__container");
const closeBtn = document.getElementById("close");

openButtons.forEach((open) => {
  open.addEventListener("click", () => {
    modal.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
