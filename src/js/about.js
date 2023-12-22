const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const nav = document.querySelector(".nav");
const navSubmenu = document.querySelector(".nav__submenu");
const navItems = document.querySelectorAll(".nav__item");
const navLink = document.querySelectorAll(".nav-link ");
const hamburger = document.querySelector('.header__hamburger');

window.onscroll = function(){
  let top = window.scrollY;

  if(top >= 100) {
    headerLogo.classList.add("active");
    navSubmenu.classList.add("active");
    navItems.forEach(item => {
      item.classList.add("active");
    })
  }else {
    headerLogo.classList.remove("active");
    navSubmenu.classList.remove("active");
    navItems.forEach(item => {
      item.classList.remove("active");
    })
  }
}

// Toggle mobile nav menu
hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('header__hamburger--open');
  nav.classList.toggle("header__hamburger--open");
});

// Hide menu after chosing nav link
navLink.forEach(link => {
  nav.addEventListener("click", () => {
    hamburger.classList.remove("header__hamburger--open");
    nav.classList.remove("header__hamburger--open")
  })
})