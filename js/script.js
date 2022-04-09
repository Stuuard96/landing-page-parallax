/*---------------------Efecto parallax----------------------*/
window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.querySelector(".icon__heart");
    var elemento2 = document.querySelector(".icon__fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}

/*---------------Mostrar menu con JS------------------------*/
const icon_menu = document.querySelector("#icon__menu");
const menu = document.querySelector(".menu");
var container = $('.menu, #icon__menu');

icon_menu.addEventListener("click", mostrar_menu);

function mostrar_menu(){
    menu.classList.toggle("mostrar__menu");
}

/*---Al clickear fuera del menu y del icono con Jquery------*/
$(document).mouseup(function(event){    
    var menu = $('.menu');
        // Si el elemento cliqueado no pertenece al contenedor padre
    if (!container.is(event.target) && container.has(event.target).length === 0) 
    {
        //menu.hide('slow'); 
        menu.removeClass("mostrar__menu");
    }
}); 

/*Mostrar menu al pasar el mouse sobre el bottom*/
$(function() {
    container.mouseenter(function(event) {
        //$(".menu").show('slow');
        $(".menu").addClass("mostrar__menu");
        event.stopImmediatePropagation();
    });
    container.mouseleave(function(event) {
        //$(".menu").hide('slow');
        $(".menu").removeClass('mostrar__menu');
        event.stopImmediatePropagation();
    });
}); 

//Jquery
//Al hacer click a cualquier elemento que no sean los mencionados cambia a display:none
/* $("*:not(.menu, #icon__menu)").on("click", function(event){
    if ($(".menu").is(":visible")){
        $(".menu").slideUp();
    }
}); */
 
//Al hacer click al elemento hace un display:none y si le das otro click hace un display:block, sucesivamente..
/* $("#icon__menu").on("click", function(event){
    $(".menu").slideToggle();
    //Detengo la inmediata propagación del evento
    event.stopImmediatePropagation(); 
}); */