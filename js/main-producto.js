function renderProducto() {
    const producto = cargarProductoLS();
    let htmlImagenProducto = `<img src="${producto.imagen}" class="img-fluid rounded-4" alt=${producto.nombre} />`;
    let htmlDetalleProducto = `<h1 class= "d-flex align-items-center justify-content-center">${producto.nombre}</h1>
    <p class="text-danger fs-3 d-flex align-items-center justify-content-center">$${producto.precio} ARS</p>
    <p class= "d-flex align-items-center justify-content-center"><b>ATENCIÓN:</b> Consultar stock antes de realizar la compra.</p>
    <p class="card-text d-flex align-items-center justify-content-center"><button class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>`;
    document.getElementById("imagenProducto").innerHTML = htmlImagenProducto;
    document.getElementById("detalleProducto").innerHTML = htmlDetalleProducto;
}

renderProducto();
renderBotonCarrito();