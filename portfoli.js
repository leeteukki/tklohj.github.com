/* Header */
window.onload = function() { scorllFunction()};
window.onscroll = function() {scorllFunction()};

function scorllFunction() {
  var header = document.getElementById('header')

  if (document.documentElement.scrollTop > 70) {
    if(!header.classList.contains('navbar-fixed')) {
      header.classList.add('navbar-fixed')
      document.getElementByTagName('body')[0].style.marginTop = '70px';
      header.style.display = 'none'
      setTimeout(function(){
        header.style.display = 'block';
      }, 40);
    }
  } else{
    if(header.classList.contains('navbar-fixed')){
      header.classList.remove('navbar-fixed');
      document.getElementByTagName('body')[0].style.marginTop = 0;
    }
  }
}

function menuToggle() {
  document.getElementById('menu').classList.toggle('show');
}
document.getElementById('toggleBtn').addEventListener('click', menuToggle);

/*WELCOME AREA */

var imageSlideIndex = 1;

showImageSlides(imageSlideIndex);

function plusImageSlides(n) {
  showImageSlides(imageSlideIndex += n);

}

function currentImageSlide(n) {
  showImageSlides(imageSlideIndex = n);

}

 function showImageSlides(n) {
   var i;
   var slides = document.getElementsByClassName('image-slide');
   var dots = document.getElementsByClassName('dot');
   if(n > slides.length) { imageSlideIndex =1}
   if(n<1) {imageSlideIndex = slide.length}
   for(i=0; i < dots.length; i++) {
     slides[i].style.display = 'none';
   }
   for(i=0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(' active', "");

   }
   slides[imageSlideIndex - 1].style.display = 'block';
   dots[imageSlideIndex - 1 ].className = 'active';
 }
