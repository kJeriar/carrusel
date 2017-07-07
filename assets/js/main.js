
//funcion para que al presionar el boton cambie la imagen

$(document).ready(function (){
    $(".img").hide();
    $("#denim").show();
    $(".boton").css("background-color", "#000000");
})
$("#boton1").click(function(){
    $(".img").hide();
    $("#denim").show();

});

$("#boton2").click(function(){
    $(".img").hide();
    $("#madeInChile").show();
  
});

$("#boton3").click(function(){
    $(".img").hide();
    $("#custom").show();
   
});

$("#boton4").click(function(){
    $(".img").hide();
    $("#exclusive").show();
  
});

$("#boton5").click(function(){
    $(".img").hide();
    $("#MyQueen").show();
   
});


function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
