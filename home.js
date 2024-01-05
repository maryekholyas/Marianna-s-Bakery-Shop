//2372027 Mary Yekholya Simbolon
//Section 1
function imgSlider(anything){
    document.querySelector('.marianna').src = anything;
  }

  function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
  }

//Section 3
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//responsive

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}