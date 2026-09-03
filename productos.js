const productos = [

    {
        id: 1,
        nombre: "Labial Rosa",
        precio: 25000,
        imagen: "imagenes/labial.jpg",
        descripcion: "Labial de larga duración."
    },

    {
        id: 2,
        nombre: "Base Líquida",
        precio: 45000,
        imagen: "imagenes/base.jpg",
        descripcion: "Base para un acabado natural."
    },

    {
        id: 3,
        nombre: "Rubor",
        precio: 30000,
        imagen: "imagenes/rubor.jpg",
        descripcion: "Rubor de acabado natural."
    },
    {
        id: 4,
        nombre: "Labial Rosa",
        precio: 25000,
        imagen: "imagenes/labial.jpg",
        descripcion: "Labial de larga duración."
    },

    {
        id: 5,
        nombre: "Crema hidratante",
        precio: 12000,
        imagen: "imagenes/crema hidratante.jpeg",
        descripcion: "Crema hidratante para un acabado natural."
    },

    {
        id: 6,
        nombre: "Labial de hombre",
        precio: 3000,
        imagen: "imagenes/labial-hombre.jpg",
        descripcion: "Labial de acabado natural."
    },
    {
    id: 7,
    nombre: "Esplas",
    precio: 25000,
    categoria: "Maquillaje",
    imagen: "imagenes/Esplas.jpeg",
    descripcion: "larga duración."
}

];


let carrito = [];


function mostrarProductos() {

    const contenedor =
        document.getElementById("lista-productos");

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        contenedor.innerHTML += `

            <div class="producto">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <div class="producto-info">

                    <h3>
                        ${producto.nombre}
                    </h3>

                    <p>
                        ${producto.descripcion}
                    </p>

                    <div class="precio">
                        $${producto.precio.toLocaleString("es-CO")}
                    </div>

                    <button
                        onclick="agregarCarrito(${producto.id})">

                        Agregar al carrito

                    </button>

                </div>

            </div>

        `;

    });

}


function agregarCarrito(id) {

    const producto =
        productos.find(p => p.id === id);

    carrito.push(producto);

    actualizarCarrito();

}


function actualizarCarrito() {

    const contenedor =
        document.getElementById("productos-carrito");

    const cantidad =
        document.getElementById("cantidad-carrito");

    const total =
        document.getElementById("total-carrito");

    contenedor.innerHTML = "";

    let totalCompra = 0;


    carrito.forEach((producto, index) => {

        totalCompra += producto.precio;

        contenedor.innerHTML += `

            <div class="item-carrito">

                <span>
                    ${producto.nombre}
                </span>

                <span>
                    $${producto.precio.toLocaleString("es-CO")}
                </span>

                <button
                    onclick="eliminarProducto(${index})">

                    ❌

                </button>

            </div>

        `;

    });


    cantidad.textContent = carrito.length;

    total.textContent =
        totalCompra.toLocaleString("es-CO");

}


function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarCarrito();

}


function mostrarCarrito() {

    document.getElementById("carrito").style.display =
        "block";

}


function cerrarCarrito() {

    document.getElementById("carrito").style.display =
        "none";

}


function comprarWhatsApp() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;

    }


    let mensaje =
        "Hola Love Beauty 💕, quiero realizar este pedido:%0A%0A";


    let total = 0;


    carrito.forEach(producto => {

        mensaje +=
            `• ${producto.nombre} - $${producto.precio.toLocaleString("es-CO")}%0A`;

        total += producto.precio;

    });


    mensaje +=
        `%0ATotal: $${total.toLocaleString("es-CO")}`;


    const numero =
        "573014997912";


    const url =
        `https://wa.me/${numero}?text=${mensaje}`;


    window.open(url, "_blank");

}


mostrarProductos();