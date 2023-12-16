const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");



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

function scrollabajo() {
	var seccionProductos = document.getElementById('productos');
	seccionProductos.scrollIntoView({ behavior: 'smooth' });
}
