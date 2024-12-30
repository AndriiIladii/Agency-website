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

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

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

// Scroll to top

const calcScrollValue = () => {
  const scrollProgress = document.querySelector(".scroll__progress");
  const pos = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.display = pos > 100 ? "flex" : "none";

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#9dff50 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);

AOS.init();

// Sticky Header

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//Modal

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

// Email sending

const form = document.querySelector(".form");
const closeModal = () => {
  modal.classList.remove("show");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  (function () {
    emailjs.init("SKcsEiQVkv2-_H0KY");
  })();

  const serviceId = "service_otrbr3v";
  const templateId = "template_m08zf9q";
  let params = {
    senderName: document.querySelector("#name").value,
    senderEmail: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  emailjs.send(serviceId, templateId, params).then(
    function (response) {
      Swal.fire({
        title: "Your Email was sent!",
        icon: "success",
      }).then(() => {
        form.reset();
      });
    },
    function (error) {
      console.log("FAILED...", error);
      Swal.fire({
        title: "Error sending email",
        text: "Please try again later.",
        icon: "error",
      });
    }
  );

  setTimeout(() => {
    closeModal();
  }, 600);
});
