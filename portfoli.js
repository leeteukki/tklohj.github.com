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
