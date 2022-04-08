/*---------------------Efecto parallax----------------------*/
window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.querySelector(".icon__heart");
    var elemento2 = document.querySelector(".icon__fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}
