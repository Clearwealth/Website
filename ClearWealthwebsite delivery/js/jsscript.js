var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var mbNav = document.getElementById("mb-nav");
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
    mbNav.style.transform = "translateY(-100%)";
    
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
    mbNav.style.transform = "translateY(0)";
    if (currentScroll === 0) {
      navbar.classList.remove("scrolled");
      mbNav.classList.remove("scrolled");
    } else {
      navbar.classList.add("scrolled");
      mbNav.classList.add("scrolled");
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// mobile navbar js
const menIcon = document.querySelector(".men-icon");
const closeIcon = document.querySelector(".close-icon");

menIcon.addEventListener("click", function () {
  document.querySelector(".mobile-menu").style.transform = "translateX(0px)";
});
closeIcon.addEventListener("click", function () {
  document.querySelector(".mobile-menu").style.transform = "translateX(-100%)";
});

// mobile navbar js end
