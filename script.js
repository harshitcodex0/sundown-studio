const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.05,
});

function page4Animation() {
  // Fixed Image Code
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}
page4Animation();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
swiperAnimation();


let  menu = document.querySelector("nav h3");
let full = document.querySelector("#full-scr");
let navImg = document.querySelector("nav img");
let flag = 0;
menu.addEventListener("click", function(){
  if(flag == 0){
    full.style.top = 0;
    navImg.style.opacity = 0;
    flag = 1;
  } else{
    full.style.top = "-100%";
    setTimeout(() => {
      navImg.style.opacity = 1;
    }, "100");
    flag = 0;
  }
})

