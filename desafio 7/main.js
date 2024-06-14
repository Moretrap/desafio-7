let precioP = document.getElementById("precioProducto")
setTimeout(() => {
 precioP.innerText = "precio: $300"
 let titulo = document.querySelector("h1")
 titulo.style.color = "red"
}, 4000)