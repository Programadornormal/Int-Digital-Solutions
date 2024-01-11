const fechaCopy = document.getElementById("fecha");
const btnMenu = document.getElementById("btn-menu");
const btnMenu1 = document.getElementById("btn-menu1");
const btnAyuda = document.getElementById("headerBot");
const btncerrarAyuda = document.getElementById("cerrarayuda");
const cajaAyuda = document.getElementById("chatbot");
const btnabrirAyuda = document.getElementById("btnabrirAyuda");
const btnInfo1  = document.getElementById("info1");
const btnInfo2  = document.getElementById("info2");
const btnInfo3  = document.getElementById("info3");
const menuHeader = document.getElementById("menu");
const btnInfo4  = document.getElementById("info4");
const cajaMensajes = document.getElementById("mensajes");
const bntAyudasend  = document.getElementById("btn-ayuda");
//const navegacion = document.getElementById("links-menu");
const menu = document.getElementById("menu");
var añoActual = new Date();
console.log(añoActual.getFullYear());
fechaCopy.innerHTML = `<p>Todos los derechos resevados |&copy;${añoActual.getFullYear()} Int Digital Solutions</p>`;
/*btnMenu.addEventListener("click", function(){
        menuHeader.classList.remove('slideMenudown');
        menuHeader.classList.add('slideMenuup');
        btnMenu1.style.display = 'block';
        btnMenu.style.display = 'none';
        numMenu = 1;
   
});
btnMenu1.addEventListener("click", function(){
    menuHeader.classList.add('slideMenudown');
    menuHeader.classList.remove('slideMenuup');
    btnMenu.style.display = '';
    numMenu = 0;
    btnMenu1.style.display = 'none';
    
});*/

/*function scrollarriba() {
	var seccionInicio = document.getElementById('bienvenido');
	seccionInicio.scrollIntoView({ behavior: 'smooth' });
}*/
/*let operandoSuma = 0;*/
btnabrirAyuda.addEventListener("click", function(){
        
    /*if (cajaAyuda.style.transform === "translateY(580px)") {*/
        //if(operandoSuma === 0){
            cajaAyuda.style.display = '';
            //cajaAyuda.classList.remove('slideDown');
            //cajaAyuda.classList.add('slideUp');
            btncerrarAyuda.style.display = '';
            btnabrirAyuda.style.display = 'none';
btncerrarAyuda.addEventListener("click", function(){
            //cajaAyuda.classList.add('slideDown');
            //cajaAyuda.classList.remove('slideUp');
            cajaAyuda.style.display = 'none';
            btnabrirAyuda.style.display = '';
            operandoSuma = 0;
            btncerrarAyuda.style.display = 'none';
})
            //operandoSuma = 1;
      /*  }else{
            cajaAyuda.classList.add('slideDown');
            cajaAyuda.classList.remove('slideUp');
            btnabrirAyuda.style.display = '';
            operandoSuma = 0;
            btncerrarAyuda.style.display = 'none';
        }*/
        
   /* } else {
        cajaAyuda.classList.remove('slideUp');
        cajaAyuda.classList.add('slideDown');
        btnabrirAyuda.style.display = '';
        btncerrarAyuda.style.display = 'none'; 
    }*/

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