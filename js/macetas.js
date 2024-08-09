function renderProductos() {
    let macetasHTML = "";
    
    for (const producto of arrayMacetas) { 
        macetasHTML += `<div class="col-md-3">
            <div class="card border-0">
                <a href="producto.html" onclick="guardarProductoLS(${producto.id});">
                    <img src="${producto.imagen}" class="card-img-top rounded-4" alt="${producto.nombre}">
                </a>
                <div class="card-body text-center">
                    <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio} ARS</span></p>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("contenidoMacetas").innerHTML = macetasHTML; 
    
}

renderProductos();
renderBotonCarrito();