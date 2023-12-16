const fechaCopy = document.getElementById("fecha");
const btnMenu = document.getElementById("btn-menu");
const btnMenu1 = document.getElementById("btn-menu1");
//const navegacion = document.getElementById("links-menu");
const menu = document.getElementById("menu");
var añoActual = new Date();
console.log(añoActual.getFullYear());
fechaCopy.innerHTML = `<p>Todos los derechos resevados |&copy;${añoActual.getFullYear()} Int Digital Solutions</p>`;
btnMenu.addEventListener("click", function(){
    menu.style.height = '180px';
    menu.style.transition = 'height .5s';
    //navegacion.style.display = 'flex';
    btnMenu.style.display = 'none';
    btnMenu1.style.display = 'block';
    
})
btnMenu1.addEventListener("click", function(){
    //navegacion.style.display = 'none';
    menu.style.height = '100px';
    btnMenu.style.display = 'block';
    btnMenu1.style.display = 'none'
    
})