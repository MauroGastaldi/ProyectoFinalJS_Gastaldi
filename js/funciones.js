
const productos = [
    {id:1, nombre:"Lampara1", precio:25990,categoria:"lamparas", imagen:"https://i.pinimg.com/564x/ae/03/81/ae0381635bc8fdf6c517255a8ffd8e0a.jpg"},
    {id:2, nombre:"Lampara2", precio:29990,categoria:"lamparas", imagen:"https://i.pinimg.com/564x/45/72/ca/4572ca7dd47fd3e2abb1a040d23ad3ba.jpg"},
    {id:3, nombre:"Maceta1", precio:14990,categoria:"macetas", imagen:"https://i.pinimg.com/564x/46/06/6f/46066feaf34edf43c8fdd3acbfc63238.jpg"},
    {id:4, nombre:"Maceta2", precio:9990,categoria:"macetas", imagen:"https://i.pinimg.com/564x/1f/4d/ae/1f4daeae09166037f3cf52ac855647c1.jpg"},
];
const arrayLamparas = productos.filter((item) => item.categoria.includes('lamparas'));
const arrayMacetas = productos.filter((item) => item.categoria.includes('macetas'));


function agregarProducto(id) { 
    const producto = productos.find(item => item.id == id); 
    const carrito = cargarCarritoLS();
    carrito.push(producto); 
    guardarCarritoLS(carrito); 
    renderBotonCarrito();
    console.log("El producto #" + id + " se ha agregado correctamente!");
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1){
        carrito.splice(index, 1);
    }
    guardarCarritoLS(carrito);
    renderCarrito();
    renderBotonCarrito();
    console.log("El producto #" + id + " se ha eliminado correctamente!");
}

function renderBotonCarrito() { 
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML = total;
}

function totalProductos() {
    const carrito = cargarCarritoLS();
    return carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || []; 
}

function guardarCarritoLS(carrito) { 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    console.log("El carrito se ha vaciado correctamente!");
}



function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto")); 
    const producto = productos.find(item => item.id == id); 
    return producto;
   
}
function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
    console.log("estoy aca");
}


function calcularPrecio(carrito, cuponDescuento) {
    let precioTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    if (cuponDescuento === "CUPONDESCUENTO") {
        precioTotal = precioTotal * 0.85;
    }

    return precioTotal.toFixed(2); 
}

function validarCupon() {
    const cupon = document.getElementById("cuponDescuento").value.toUpperCase();
    const carrito = cargarCarritoLS();
    const precioTotalConDescuento = calcularPrecio(carrito, cupon);
    document.getElementById("totalPrecio").innerText = `Total: $${precioTotalConDescuento} ARS`;
}



function pedidoRealizado(){
    const cargarPedido = document.getElementById("contenido");
     cargarPedido.innerHTML =`<div class="my-5 text-center">
    <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>`; 
    setTimeout(() => {
         swal({
        title: "El pedido se realizó con éxito!",
        icon: "success",
        button: "Continuar",
      });

    }, 1000)
   setTimeout(() => {
        cargarPedido.innerHTML = `<div class="my-5 text-center h5">Tu pedido se ha realizado con éxito!</div>`; //quedan los productos en carrito, si lo vacío tengo que modificar el main para que no aparezca la iamgen de carrito vacio
    }, 1000);
    pedidoExito();
}

//-----------Sección Contacto
function validarFormulario() {
    let campoEmail = document.getElementById("exampleFormControlInput1").value;
   

    if (campoEmail == "") {
        Toastify({
            text: "Complete el Campo Email!",
            duration: 3000,
            gravity: "top",
            position: "right", 
            style: {
                color:"black",
                background: "linear-gradient(to right, white, red)",
            },
        }).showToast();
        return false;
    }
}




// ---------Cargar un nuevo Producto a la API Fakestore
function cargarProducto() {
    let nombre = document.getElementById("nombre").value;
    let imagen = document.getElementById("imagen").value;
    let precio = document.getElementById("precio").value;
    let categoria = document.getElementById("categoria").value;

    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                name: nombre,
                price: precio,
                image: imagen,
                category: categoria
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => {
        console.log(json);
        productos.push(json);
        console.log(productos);        
        Toastify({
            text: "Producto cargado correctamente!",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    })
}

document.getElementById("btnFormulario1").addEventListener("click", cargarProducto);



