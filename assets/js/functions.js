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

navMenuToggle();
