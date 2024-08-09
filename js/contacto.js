let campoComentario = document.getElementById("seccionComentario");
let enviarComentario = document.getElementById("btnFormContacto");

campoComentario.addEventListener("keydown", () => {
})

campoComentario.onkeyup = () => {
};

campoComentario.oninput = () => {
    let maximo = 140;
    let longTexto = campoComentario.value.length;
    let diff = maximo - longTexto;
    document.getElementById("caracteresComentario").innerHTML = "Caracteres disponibles: " + diff;
};

enviarComentario.addEventListener('click', () => {
    let seccionComentario = campoComentario.value;
    if (seccionComentario !== "") {
        Toastify({
            text: "Tu mensaje se envió correctamente!",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    } else{
            Toastify({
                text: "Complete el Campo de texto",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    color: "white",
                    background: "linear-gradient(to right, blue, violet)",
                },
            }).showToast();
            return false;
        }
    });


renderBotonCarrito();