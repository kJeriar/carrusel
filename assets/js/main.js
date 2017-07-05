
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
