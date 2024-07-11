class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("LAMPARA1", "Lampara1", 25000));
productos.push(new Producto("LAMPARA2", "Lampara2", 30000));
productos.push(new Producto("MACETA1", "Maceta1", 15000));
productos.push(new Producto("MACETA2", "Maceta2", 10000));

let productoBuscado = prompt("Ingrese nombre de producto para consultar stock: (ESC para salir)").toUpperCase();
const buscado = productos.some(producto => producto.id === productoBuscado);
alert(buscado);
let nombreCliente = prompt("Ingrese su nombre y apellido: (ESC para salir)").toUpperCase();
let ingreseLocalidad = prompt("Ingrese su localidad: ").toUpperCase();
let cuponDescuento = prompt("Ingrese cupón de descuento: (ESC para salir)").toUpperCase();


console.log(nombreCliente);
console.log(ingreseLocalidad);
console.log(cuponDescuento);






const arrayProductos = productos.slice();

for (const producto of arrayProductos) {
    producto.sumarIva();
}

arrayProductos.forEach((producto) => {
    producto.precio *= 1.25;
    console.log(producto.nombre + " $" + producto.precio);
});


const baratos = arrayProductos.filter((producto) => producto.precio <= 25000);
baratos.forEach((producto) => {
    console.log("productos con un valor menor a 25000: " + producto.nombre + " $" + producto.precio);
});


while (nombreCliente !== "ESC") {
    let textoProductoSeleccionado = "Seleccione un producto\n\n";
    textoProductoSeleccionado += "(1) Lámpara 1 - $" + arrayProductos[0].precio + "\n";
    textoProductoSeleccionado += "(2) Lámpara 2 - $" + arrayProductos[1].precio + "\n";
    textoProductoSeleccionado += "(3) Maceta1 - $" + arrayProductos[2].precio + "\n";
    textoProductoSeleccionado += "(4) Maceta2 - $" + arrayProductos[3].precio + "\n";

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
            precio = arrayProductos[0].precio;
            break;
        case 2:
            precio = arrayProductos[1].precio;
            break;
        case 3:
            precio = arrayProductos[2].precio;
            break;
        case 4:
            precio = arrayProductos[3].precio;
            break;
        default:
            return null;
    }

    if (cuponDescuento === "CUPON15") {
        precio = precio * 0.85;
    }

    return precio;
}





