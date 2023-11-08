const heroButton = document.querySelector(".hero__btn");
const heroList = document.querySelector(".hero__list");
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const navSubmenu = document.querySelector(".nav__submenu");
const navItems = document.querySelectorAll(".nav__item");

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

window.onscroll = function(){
  let top = window.scrollY;
  console.log(top);

  if(top >= 40) {
    header.classList.add("active");
    headerLogo.classList.add("active");
    navSubmenu.classList.add("active");
    navItems.forEach(item => {
      item.classList.add("active");
    })
  }else {
    header.classList.remove("active");
    headerLogo.classList.remove("active");
    navSubmenu.classList.remove("active");
    navItems.forEach(item => {
      item.classList.remove("active");
    })
  }
}