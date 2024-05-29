const precio = 400000;
let cantidadProducto = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadTotal = document.querySelector(".cantidad");
const precioTotal = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;

function actualizarCantidadYPrecio() {
    cantidadTotal.innerHTML = cantidadProducto;
    precioTotal.innerHTML = precio * cantidadProducto;
}

function addCant() {
    cantidadProducto++;
    actualizarCantidadYPrecio();
}

function desCant() {
    if (cantidadProducto > 0) {
        cantidadProducto--;
        actualizarCantidadYPrecio();
    }
}
