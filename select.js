document.addEventListener('DOMContentLoaded', function () {
    const jsonFilePath = 'productos.json';

    async function cargarProductos() {
        try {
          const response = await fetch(jsonFilePath);
          const data = await response.json();
          mostrarDetallesProducto(data.objeto);
        } catch (error) {
          console.error('Error al cargar el archivo JSON:', error);
        }
    }
    function mostrarDetallesProducto(objetos) {
        const detallesContainer = document.getElementById('contenido-productos');
    
        if (objetos.length > 0) {
            const elementosHTML = objetos.map(objeto => `
                <div class="card">
                    ${objeto.imagen}
                    <h2 name="información">${objeto.nombre}</h2>
                    <p>${objeto.descripcion}
                    <p>${objeto.precio}</p>
                    ${objeto.boton}
                </div>
            `);
    
            detallesContainer.innerHTML = elementosHTML.join('');
        } else {
            detallesContainer.innerHTML = `
                <div class="error">
                    <img class="errorimg" src="/img/inty1.jpg" alt="ERROR 404">
                    <h1>No hay objetos disponibles</h1>
                    <a href="/index.html">Regresar a inicio</a>
                </div>
            `;
        }
    }
    cargarProductos();
    
});