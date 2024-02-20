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

function main() {
  navMenuToggle();
  toggleSkills();
  switchQualificationTab();
  initPortfolioSwiper();
}

main();
