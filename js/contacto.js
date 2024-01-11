const cajacontacto = document.getElementById("cajaflotante");
const btn = document.getElementById("btn");

async function mostrarcaja(valor){
    cajacontacto.style.display = '';
    console.log(valor);
}
async function ocultarcaja(){
    event.preventDefault();
    cajacontacto.style.display = 'none';
}























/*async function llamada(){
    /*const { value: formValues } = await Swal.fire({
        title: 'Ingresa tu número telefónico',
        html:
          '<input id="telefono" name="telefono" class="swal2-input">',
        focusConfirm: true,
        confirmButtonText: 'Continuar',
        preConfirm: () => {
          return [
            document.getElementById('telefono').value,
          ]
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues));

      }
    const caja = document.getElementById("cajaflotante");
    caja.style.display = '';




}*/