const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const navSubmenu = document.querySelector(".nav__submenu");
const navItems = document.querySelectorAll(".nav__item");
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