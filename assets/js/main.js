function navMenuToggle() {
  const navMenu = document.getElementById("navMenu"),
    navToggle = document.getElementById("navToggle"),
    navClose = document.getElementById("navClose");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("nav__menu--show");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("nav__menu--show");
    });
  }
}

function navMenuLinkAction() {
  const navLink = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("nav__menu--show");
  }

  navLink.forEach((n) => n.addEventListener("click", linkAction));
}

function navActiveLinkHighlight() {
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("nav__link--active");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("nav__link--active");
      }
    });
  }

  window.addEventListener("scroll", scrollActive);
}

function setSkillsClass() {
  const skillsContent = document.getElementsByClassName("skills__content");
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content --close";
  }

  if (itemClass === "skills__content --close") {
    this.parentNode.className = "skills__content --open";
  }
}

function toggleSkills() {
  const skillsHeader = document.querySelectorAll(".skills__header");

  skillsHeader.forEach((el) => {
    el.addEventListener("click", setSkillsClass);
  });
}

function switchQualificationTab() {
  const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualifications--active");
      });
      target.classList.add("qualifications--active");

      tabs.forEach((tab) => {
        tab.classList.remove("qualifications--active");
      });
      tab.classList.add("qualifications--active");
    });
  });
}

function initPortfolioSwiper() {
  new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function initTestimonialSwiper() {
  new Swiper(".testimonial__container", {
    grabCursor: true,
    loop: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  });
}

function main() {
  navMenuToggle();
  navMenuLinkAction();
  navActiveLinkHighlight();
  toggleSkills();
  switchQualificationTab();
  initPortfolioSwiper();
  initTestimonialSwiper();
}

main();
