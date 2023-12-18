const fechaCopy = document.getElementById("fecha");
const btnMenu = document.getElementById("btn-menu");
const btnMenu1 = document.getElementById("btn-menu1");
const btnAyuda  =document.getElementById("headerBot");
const btncerrarAyuda = document.getElementById("cerrarayuda");
const cajaAyuda = document.getElementById("chatbot");
const btnabrirAyuda = document.getElementById("btnabrirAyuda");
const btnInfo1  = document.getElementById("info1");
const btnInfo2  = document.getElementById("info2");
const btnInfo3  = document.getElementById("info3");
const btnInfo4  = document.getElementById("info4");
const cajaMensajes = document.getElementById("mensajes");
const bntAyudasend  = document.getElementById("btn-ayuda");
//const navegacion = document.getElementById("links-menu");
const menu = document.getElementById("menu");
var añoActual = new Date();
console.log(añoActual.getFullYear());
fechaCopy.innerHTML = `<p>Todos los derechos resevados |&copy;${añoActual.getFullYear()} Int Digital Solutions</p>`;
btnMenu.addEventListener("click", function(){
    menu.style.height = '180px';
    menu.style.transition = 'height .5s';
    btnMenu.style.display = 'none';
    btnMenu1.style.display = 'block';
    
})
btnMenu1.addEventListener("click", function(){
    //navegacion.style.display = 'none';
    menu.style.height = '100px';
    btnMenu.style.display = 'block';
    btnMenu1.style.display = 'none'
    
});

function scrollarriba() {
	var seccionInicio = document.getElementById('bienvenido');
	seccionInicio.scrollIntoView({ behavior: 'smooth' });
}

btnAyuda.addEventListener("click", function(){
    if(cajaAyuda.style.top === "90%"){
        cajaAyuda.style.display = 'flex';
        cajaAyuda.style.top = "20%"
        cajaAyuda.style.animation = 'cr 1s forwards';
        btncerrarAyuda.style.display = '';
        btnabrirAyuda.style.display = 'none';
    }else{
        cajaAyuda.style.top = "90%"
        cajaAyuda.style.animation = 'crc .7s forwards';
        btnabrirAyuda.style.display = '';
        btncerrarAyuda.style.display = 'none';
    }

});
/*
btncerrarAyuda.addEventListener("click", function(){
    if(cajaAyuda.style.display === "flex"){
        cajaAyuda.style.display = 'none';
        cajaAyuda.style.transition = 'display .5s';
        
    }

});

btnInfo1.addEventListener("click", function(){
    mensajes.innerHTML = `
        <div class="respuesta">
          <div class="mensaje-user">
          <p>${btnInfo1.value}</p>
          </div>
          <div class="mensaje-bot">
          <p>Esta es la ayuda</p>
          </div>
        </div>
          `;
})
btnInfo2.addEventListener("click", function(){
    mensajes.innerHTML = `
        <div class="respuesta">
          <div class="mensaje-user">
          <p>${btnInfo2.value}</p>
          </div>
          <div class="mensaje-bot">
          <p>Esta es la ayuda</p>
          </div>
        </div>
          `;
})
btnInfo3.addEventListener("click", function(){
    mensajes.innerHTML = `
        <div class="respuesta">
          <div class="mensaje-user">
          <p>${btnInfo3.value}</p>
          </div>
          <div class="mensaje-bot">
          <p>Esta es la ayuda</p>
          </div>
        </div>
          `;
})
*/