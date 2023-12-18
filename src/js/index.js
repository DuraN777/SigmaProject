// Header
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const nav = document.querySelector(".nav");
const navSubmenu = document.querySelector(".nav__submenu");
const navItems = document.querySelectorAll(".nav__item");
const hamburger = document.querySelector('.header__hamburger');
// Hero section
const heroButton = document.querySelector(".hero__btn");
const heroList = document.querySelector(".hero__list");
const heroSection = document.querySelector(".hero")
const heroScroller = document.querySelector(".arrow-down");
// Service-details section
const listBoxes = document.querySelectorAll(".list-box");

heroScroller.addEventListener("click", scrollToNextSection);

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('header__hamburger--open');
});

heroButton.addEventListener('click', function () {
  
  if (heroList.classList.contains('hidden')) {
    heroList.classList.remove('hidden');
    setTimeout(function () {
      heroList.classList.remove('visuallyhidden');
    }, 50);
  } else {
    heroList.classList.add('visuallyhidden');    
    heroList.addEventListener('transitionend', function(e) {
      heroList.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
  
}, false);

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
    navSubmenu.classList.add("active");
    navItems.forEach(item => {
      item.classList.add("active");
    })
  }else {
    headerLogo.classList.remove("active");
    nav.classList.remove("active");
    navSubmenu.classList.remove("active");
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
    list.classList.toggle("active");
  })
})

// Functions 
function scrollToNextSection() {
  const sectionCords = heroSection.getBoundingClientRect();
  window.scrollTo({
    top: sectionCords.bottom + window.scrollY,
    behavior: "smooth",
  });
}