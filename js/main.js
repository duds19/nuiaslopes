window.onscroll = function () { scrollFunction() };
function scrollFunction() {

  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("navbar").style.backgroundColor = '#DC143C';

  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
  }
}

$(document).ready(function(){


  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

});