const heroButton = document.querySelector(".hero__btn");
const heroList = document.querySelector(".hero__list");
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");

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
      console.log("trnsitioned");
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
  }else {
    header.classList.remove("active");
    headerLogo.classList.remove("active");
  }
}