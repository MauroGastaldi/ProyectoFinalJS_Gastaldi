let nombreCliente = prompt("Ingrese su nombre y apellido: (ESC para salir)").toUpperCase();
let ingreseLocalidad = prompt("Ingrese su localidad: ").toUpperCase();
let cuponDescuento = prompt("Ingrese cupón de descuento: (ESC para salir)").toUpperCase();

console.log(nombreCliente);
console.log(ingreseLocalidad);
console.log(cuponDescuento);


//-----------------OBJETOS 
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }

}
const lampara1 = new Producto("Lampara1", 50000);
const lampara2 = new Producto("Lampara2", 55000);
const maceta1 = new Producto("maceta1", 20000);
const maceta2 = new Producto("maceta2", 18000);


//-----------------ARRAYS
const Lamparas = [lampara1, lampara2];
const Macetas = [maceta1, maceta2];
const arrayProductos = Lamparas.concat(Macetas);
console.log(arrayProductos.join("\n")); 

for (const producto of arrayProductos)
    producto.sumarIva();



while (nombreCliente !== "ESC") {
    let textoProductoSeleccionado = "Seleccione un producto\n\n";
    textoProductoSeleccionado += "(1) Lámpara 1 - $" + lampara1.precio + "\n";
    textoProductoSeleccionado += "(2) Lámpara 2 - $" + lampara2.precio + "\n";
    textoProductoSeleccionado += "(3) Maceta1 - $" + maceta1.precio + "\n";
    textoProductoSeleccionado += "(4) Maceta2 - $" + maceta2.precio + "\n";

    let productoSeleccionado = parseInt(prompt(textoProductoSeleccionado));

    let precioProducto = calcularPrecio(productoSeleccionado, cuponDescuento);

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
        cuponDescuento = prompt("Ingrese cupón de descuento: (ESC para salir)").toUpperCase();

    }


}

function calcularPrecio(productoSeleccionado, cuponDescuento) {
    let precio;
    switch (productoSeleccionado) {
        case 1:
            precio = lampara1.precio;
            break;
        case 2:
            precio = lampara2.precio;
            break;
        case 3:
            precio = maceta1.precio;
            break;
        case 4:
            precio = maceta2.precio;
            break;
        default:
            return null;
    }

    if (cuponDescuento === "CUPON15") {
        precio = precio * 0.85;
    }

    return precio;
}





