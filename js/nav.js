const btnmenu = document.querySelector(".btnmenu");
const nav = document.querySelector(".nav");
const linea1 = document.querySelector(".l1");
const linea2 = document.querySelector(".l2");
const linea3 = document.querySelector(".l3");

btnmenu.onclick = function(){
    nav.classList.toggle("mostrar");
    linea1.classList.toggle("rotate1");
    linea2.classList.toggle("quitar2");
    linea3.classList.toggle("rotate3");
}