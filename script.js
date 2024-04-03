const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  lerp: 0.05,
});

// Fixed Image Code
var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
  fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});