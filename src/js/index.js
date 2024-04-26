// Header
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const nav = document.querySelector(".nav");
const navSubmenu = document.querySelectorAll(".nav__submenu");
const navItems = document.querySelectorAll(".nav__item");
const navLink = document.querySelectorAll(".nav-link ");
const hamburger = document.querySelector('.header__hamburger');
// Hero section
const heroButton = document.querySelector(".hero__btn");
const heroSection = document.querySelector(".hero")
const heroScroller = document.querySelector(".arrow-down");
// Service-details section
const listBoxes = document.querySelectorAll(".list-box");
// Acordion
const acordions = document.querySelectorAll('.acordion__item');

heroScroller.addEventListener("click", scrollToNextSection);

// Toggle mobile nav menu
hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle("header__hamburger--open");
  nav.classList.toggle("header__hamburger--open");
});

// Hide menu after chosing nav link
navLink.forEach(link => {
  nav.addEventListener("click", () => {
    hamburger.classList.remove("header__hamburger--open");
    nav.classList.remove("header__hamburger--open")
  })
})

// Header styles change on scroll
let lastScrollPosition = 0;

window.onscroll = function(){
  let top = window.scrollY;

  if(top >= 100) {
    header.classList.add("active");
  }else {
    header.classList.remove("active");
  }

  let currentScrollPosition = window.scrollY;

  if(currentScrollPosition > lastScrollPosition) {
    headerLogo.classList.add("active");
    nav.classList.add("active");
    navSubmenu.forEach((item) => {
      item.classList.add("active");
    })
    navItems.forEach(item => {
      item.classList.add("active");
    })
  }else {
    headerLogo.classList.remove("active");
    nav.classList.remove("active");
    navSubmenu.forEach((item) => {
      item.classList.remove("active");
    })
    navItems.forEach(item => {
      item.classList.remove("active");
    })
  }

  lastScrollPosition = currentScrollPosition;
}

// List box toggle:
listBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const list = box.querySelector(".list-box__ul");
    const arrow = box.querySelector(".list-box__title-arrow");

    arrow.classList.toggle("active");
    list.classList.toggle("active");
  })
})


//Acordion events 
acordions.forEach(box => {
  const open = box.querySelector('.acordion__button');
  open.addEventListener('click', function() {
    acordions.forEach(b => {
      if ( b !== box) {
        b.classList.remove('active');
      }
    })
    box.classList.toggle('active');
  });
})

// Functions 
function scrollToNextSection() {
  const sectionCords = heroSection.getBoundingClientRect();
  window.scrollTo({
    top: sectionCords.bottom + window.scrollY,
    behavior: "smooth",
  });
}