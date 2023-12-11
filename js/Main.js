const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const btnMenu = document.getElementById("btn-menu");
const btnMenu1 = document.getElementById("btn-menu1");
const navegacion = document.getElementById("links-menu");
const menu = document.getElementById("menu");
const fechaCopy = document.getElementById("fecha");


var añoActual = new Date();
console.log(añoActual.getFullYear());
fechaCopy.innerHTML = `<p>Todos los derechos resevados |&copy;${añoActual.getFullYear()} Int Digital Solutions</p>`;

t1.addEventListener("click", function(){
    window.location = "/producto.html?id=1";
})
t2.addEventListener("click", function(){
    window.location = "/producto.html?id=2";
})
t3.addEventListener("click", function(){
    window.location = "/producto.html?id=3";
})
t4.addEventListener("click", function(){
    window.location = "/producto.html?id=4";
})
btnMenu.addEventListener("click", function(){
    menu.style.height = '180px';
    menu.style.transition = 'height .5s';
    navegacion.style.display = 'flex';
    btnMenu.style.display = 'none';
    btnMenu1.style.display = 'block';
    
})
btnMenu1.addEventListener("click", function(){
    navegacion.style.display = 'none';
    menu.style.height = '100px';
    btnMenu.style.display = 'block';
    btnMenu1.style.display = 'none'
    
})
function scrollabajo() {
	var seccionProductos = document.getElementById('productos');
	seccionProductos.scrollIntoView({ behavior: 'smooth' });
}
