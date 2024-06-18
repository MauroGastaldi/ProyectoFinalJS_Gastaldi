let nombreCliente = prompt("Ingrese su nombre y apellido: (ESC para salir)").toUpperCase();
let ingreseLocalidad = prompt("Ingrese su localidad: ").toUpperCase();

const lampara1 = 50000;
const lampara2 = 55000;
const maceta = 20000;

while (nombreCliente !== "ESC") {
    let textoProductoSeleccionado = "Seleccione un producto\n\n";
    textoProductoSeleccionado += "(1) Lámpara 1 - $" + lampara1 + "\n";
    textoProductoSeleccionado += "(2) Lámpara 2 - $" + lampara2 + "\n";
    textoProductoSeleccionado += "(3) Maceta - $" + maceta + "\n";

    let productoSeleccionado = parseInt(prompt(textoProductoSeleccionado));

    let precioProducto = calcularPrecio(productoSeleccionado, ingreseLocalidad);

    if (precioProducto !== null) {
        alert("Cliente: " + nombreCliente + "\n" + 
              "Localidad: " + ingreseLocalidad + "\n" + 
              "Producto: " + productoSeleccionado + "\n" + 
              "Precio: $" + precioProducto.toFixed(2));
    } else {
        alert("La opción no es válida, por favor seleccione otra.");
    }

    nombreCliente = prompt("Ingrese su nombre y apellido: (ESC para salir)").toUpperCase();
    if (nombreCliente !== "ESC") {
        ingreseLocalidad = prompt("Ingrese su localidad: ").toUpperCase();
    }

}

function calcularPrecio(productoSeleccionado, localidad) {
    let precio;
    switch (productoSeleccionado) {
        case 1:
            precio = lampara1;
            break;
        case 2:
            precio = lampara2;
            break;
        case 3:
            precio = maceta;
            break;
        default:
            return null; 
    }

    if (localidad === "SANTA FE") {
        precio = precio * 0.85;
    }

    return precio;
}





