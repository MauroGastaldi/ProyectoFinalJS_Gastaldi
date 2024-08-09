function renderCarrito() {
    const carrito = cargarCarritoLS();
    let contenidoHTML; 
   

    if (totalProductos() > 0) { 
        contenidoHTML = `<table class="table"> 
        <tbody>
        <tr>
        <td class="text-end" colspan="4"><button class="btn btn-outline-danger btn-md rounded-pill" onclick="vaciarCarrito();">Vaciar Carrito <i class="bi bi-trash"></i></button></td>
        </tr>`;

        for (const producto of carrito) {
            contenidoHTML += `<tr>
            <td><img class="rounded-4" src="${producto.imagen}" alt="${producto.nombre}" width="100"></td>
            <td class="align-middle fs-5">${producto.nombre}</td>
            <td class="text-center align-middle fs-5"><span class="text-danger">$${producto.precio} ARS</span></td>
            <td class="text-end align-middle"><button class="btn btn-outline-danger btn-md rounded-pill" onclick="eliminarProducto(${producto.id});">Eliminar <i class="bi bi-trash"></i></button></td>
            </tr>`;         
        }
        contenidoHTML += `<tr>
       <form class="row g-3" id="form-cupon">
            <td>  <div class="col-md-7">
                <label for="cuponDescuento" class="form-label">Ingrese cupón de descuento</label>
                <input type="text" class="form-control" id="cuponDescuento" value="" required><span> </span>
                <div class="col-12">
                <button class="btn btn-dark my-2 rounded-pill" type="button" onclick="validarCupon()">Validar cupón</button>
                </div>
             </div>
        
                 <td colspan="1"></td>
                 <td class="text-center align-middle h5"><span class="text-danger" id="totalPrecio">Total: $${calcularPrecio(carrito)} ARS</span></td>
                <td id="btnCompra" class="text-end align-middle"><button class="btn btn-dark btn-lg rounded-pill" onclick="realizarPedido();">Realizar pedido<i class="bi bi-bag mx-2"></i></button></td>
            </td>
         </form>
       </tr>`;
        contenidoHTML += `</tbody>
        </table>`;
    } else { 
        contenidoHTML =
            `<div class="alert border border-2 my-5 text-center" role="alert">
        <img src="https://img.freepik.com/vector-premium/2-bolsa-compras-vectorial-ilustracion-vectorial_921039-1623.jpg" alt="Carrito vacío" class="img-fluid w-25" />
        <h3>¡Tu carrito está vacío!</h3>
        </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;

    document.getElementById("btnCompra").addEventListener("click", pedidoRealizado);
}


renderCarrito();
renderBotonCarrito();