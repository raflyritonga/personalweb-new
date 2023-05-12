window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     document.getElementById("navbar").style.background = "#171B23";
     } 
     else {
          document.getElementById("navbar").style.background = "none";
     }
}

var TrandingSlider = new Swiper('.tranding-slider', {
     effect: 'coverflow',
     grabCursor: true,
     centeredSlides: true,
     loop: true,
     slidesPerView: '2',
     coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 75,
       modifier: 2.5,
     },
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     }
   }
);
