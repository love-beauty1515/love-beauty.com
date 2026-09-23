// ========================================
// PRODUCTOS DE LOVE BEAUTY
// ========================================

const productos = [

    {
        id: 1,
        nombre: "Corrector de Bloomshell",
        precio: 20000,
        categoria: "Correctores",
        imagen: "imagenes/Corrector Bloomshell.jpeg",
        descripcion: "Acabado natural y de larga duración."
    },


    {
        id: 2,
        nombre: "Corrector de Elaya",
        precio: 16000,
        categoria: "Correctores",
        imagen: "imagenes/Corrector de Elaya.jpeg",
        descripcion: "Textura ligera que no marca líneas de expresión."
    },


    {
        id: 3,
        nombre: "Corrector Superstay",
        precio: 7400,
        categoria: "Correctores",
        imagen: "imagenes/Corrector Super Stay.jpeg",
        descripcion: "Alta cobertura para ojeras e imperfecciones."
    },


    {
        id: 4,
        nombre: "Balsamo de Guzel ",
        precio: 7500,
        categoria: "Labios",
        imagen: "imagenes/Balsamo de Guzel.jpeg",
        descripcion: "Labial de larga duración."
    },


    {
        id: 5,
        nombre: "Fijador de Vitamina C ",
        precio: 7400,
        categoria: "Fijador",
        imagen: "imagenes/FijadorC .jpeg",
        descripcion: "."
    },


    {
        id: 6,
        nombre: "Fijador de Fresa",
        precio: 7400,
        categoria: "Fijador",
        imagen: "imagenes/FijadorF.jpeg",
        descripcion: "Acabado natural."
    },


    {
        id: 7,
        nombre: "Tinta de Bloomshell",
        precio: 16700,
        categoria: "Labios",
        imagen: "imagenes/Tinta de Bloomshell.jpeg",
        descripcion: "Larga duración."
    },


    
    {
        id: 8,
        nombre: "Tinta Alma Beauty",
        precio: 7400,
        categoria: "Labios",
        imagen: "imagenes/Tinta Alma Beauty.jpeg",
        descripcion: "Larga duración."
    },

    
    {
        id: 9,
        nombre: "Tinta Sagui",
        precio: 16700,
        categoria: "Labios",
        imagen: "imagenes/Tinta Sagui.jpeg",
        descripcion: "natural."
    },


    {
        id: 10,
        nombre: "Gel Hidratante de Girly ",
        precio: 29000,
        categoria: "Rostro",
        imagen: "imagenes/Gel Hidratante de Girly.jpeg",
        descripcion: "natural."
    },


    {
        id: 11,
        nombre: "Lápiz de Cejas ",
        precio: 5400,
        categoria: "Cejas",
        imagen: "imagenes/Lápiz de Cejas.jpeg",
        descripcion: "natural."
    },
    


    {
        id: 12,
        nombre: "Polvo Translúcido",
        precio: 5000,
        categoria: "Rostro",
        imagen: "imagenes/Polvo Translúcido.jpeg",
        descripcion: "natural."
    },


 {
        id: 13,
        nombre: "Blush Tono 02 Alma Beauty.",
        precio: 13000,
        categoria: "Rostro",
        imagen: "imagenes/Blush Tono 02 Alma Beauty.jpeg",
        descripcion: "natural."
    },


     {
        id: 14,
        nombre: "Cepillo Con Espejo Flor Hair Brush.",
        precio: 8700,
        categoria: "Accesorios",
        imagen: "imagenes/Cepillo Con Espejo Flor Hair Brush.jpeg",
        descripcion: "natural."
    },


    {
        id: 15,
        nombre: "Contorno Hi-Zis.",
        precio: 14100,
        categoria: "Rostro",
        imagen: "imagenes/Contorno Hi-Zis.jpeg",
        descripcion: "natural."
    },


    {
        id: 16,
        nombre: "Espejo Oro Rosa Cosmetics.",
        precio: 12000,
        categoria: "Accesorios",
        imagen: "imagenes/Espejo Oro Rosa Cosmetics.jpeg",
        descripcion: "natural."
    },


    {
        id: 17,
        nombre: "Fat Oil.",
        precio: 7500,
        categoria: "Labios",
        imagen: "imagenes/Fat Oil.jpeg",
        descripcion: "natural."
    },



    {
        id: 18,
        nombre: "Iluminadores x2.",
        precio: 10200,
        categoria: "Rostro",
        imagen: "imagenes/Iluminadores x2.jpeg",
        descripcion: "natural."
    },



    {
        id: 19,
        nombre: "Kit Serums X3 Biaqua.",
        preci: 20000,
        categoria: "Rostro",
        imagen: "imagenes/Kit Serums X3 Biaqua.jpeg",
        descripcion: "natural."
    },

    {
        id: 20,
        nombre: "Kit Splash y Mantequilla Corporal.",
        precio: 23100,
        categoria: "Rostro",
        imagen: "imagenes/Kit Splash y Mantequilla Corporal.jpeg",
        descripcion: "natural."
    },

    {
        id: 21,
        nombre: "Limpiador Facial BIOAQUA.",
        precio: 13000,
        categoria: "Rostro",
        imagen: "imagenes/Limpiador Facial BIOAQUA.",
        descripcion: "natural."
    },


    {
        id: 22,
        nombre: "Lip Gloss Engol.",
        precio: 10500,
        categoria: "Rostro",
        imagen: "imagenes/Lip Gloss Engol.jpeg",
        descripcion: "natural."
    },


    {
        id: 23,
        nombre: "Llavero Cereza.",
        precio: 16700,
        categoria: "Accesorios",
        imagen: "imagenes/Llavero Cereza.jpeg",
        descripcion: "natural."
    },


    {
        id: 24,
        nombre: "Lip Gloss Lucky model.",
        precio: 16700,
        categoria: "Rostro",
        imagen: "imagenes/Lip Gloss Lucky model.jpeg",
        descripcion: "natural."
    },

    {
        id: 25,
        nombre: "Pestañina De Prosa Morada.",
        precio: 18500,
        categoria: "Rostro",
        imagen: "imagenes/Pestañina De Prosa Morada.jpeg",
        descripcion: "natural."
    },


    {
        id: 26,
        nombre: "Lip Gloss",
        precio: 00,
        categoria: "Correctores",
        imagen: "imagenes/IMG-20260919-WA0025.jpeg",
        descripcion: "Acabado natural y de larga duración."
    },
    

    
];



// =================================    =======
// CARRITO
// ========================================

let carrito = [];



// ========================================
// MOSTRAR CATEGORÍAS
// ========================================

function mostrarCategorias() {

    const contenedor =
        document.getElementById("categorias");


    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";


    // Obtener categorías sin repetir

    const categorias = [
        ...new Set(
            productos.map(
                producto => producto.categoria
            )
        )
    ];


    // ====================================
    // BOTÓN TODOS
    // ====================================

    const botonTodos =
        document.createElement("button");


    botonTodos.textContent = "Todos";


    botonTodos.classList.add(
        "categoria-btn",
        "activo"
    );


    botonTodos.addEventListener(
        "click",
        function () {

            filtrarProductos(
                "Todos",
                botonTodos
            );

        }
    );


    contenedor.appendChild(
        botonTodos
    );



    // ====================================
    // CREAR CATEGORÍAS AUTOMÁTICAMENTE
    // ====================================

    categorias.forEach(
        categoria => {

            const boton =
                document.createElement("button");


            boton.textContent =
                categoria;


            boton.classList.add(
                "categoria-btn"
            );


            boton.addEventListener(
                "click",
                function () {

                    filtrarProductos(
                        categoria,
                        boton
                    );

                }
            );


            contenedor.appendChild(
                boton
            );

        }
    );

}



// ========================================
// MOSTRAR PRODUCTOS
// ========================================

function mostrarProductos(lista = productos) {

    const contenedor =
        document.getElementById(
            "lista-productos"
        );


    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";



    // Si no existen productos

    if (lista.length === 0) {

        contenedor.innerHTML = `

            <div class="sin-productos">

                <p>
                    No hay productos disponibles
                    en esta categoría.
                </p>

            </div>

        `;

        return;
    }



    // Crear cada tarjeta

    lista.forEach(
        producto => {

            contenedor.innerHTML += `

                <article class="producto">

                    <div class="producto-imagen">

                        <img
                            src="${producto.imagen}"
                            alt="${producto.nombre}"
                            onerror="this.src='https://via.placeholder.com/400x400?text=Love+Beauty'"
                        >

                    </div>


                    <div class="producto-info">

                        <span class="producto-categoria">

                            ${producto.categoria}

                        </span>


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
                            class="agregar-btn"
                            onclick="agregarCarrito(${producto.id})">

                            🛒 Agregar al carrito

                        </button>

                    </div>

                </article>

            `;

        }
    );

}



// ========================================
// FILTRAR PRODUCTOS
// ========================================

function filtrarProductos(
    categoria,
    botonSeleccionado
) {


    // Quitar activo de todos

    document
        .querySelectorAll(".categoria-btn")
        .forEach(
            boton => {

                boton.classList.remove(
                    "activo"
                );

            }
        );


    // Activar botón seleccionado

    botonSeleccionado.classList.add(
        "activo"
    );


    // Mostrar todos

    if (categoria === "Todos") {

        mostrarProductos(
            productos
        );

        return;
    }


    // Filtrar

    const productosFiltrados =
        productos.filter(
            producto =>
                producto.categoria === categoria
        );


    mostrarProductos(
        productosFiltrados
    );

}



// ========================================
// AGREGAR AL CARRITO
// ========================================

function agregarCarrito(id) {


    const producto =
        productos.find(
            producto =>
                producto.id === id
        );


    if (!producto) {

        return;

    }


    carrito.push(producto);


    actualizarCarrito();


    // Pequeña confirmación

    alert(
        `${producto.nombre} fue agregado al carrito 💕`
    );

}



// ========================================
// ACTUALIZAR CARRITO
// ========================================

function actualizarCarrito() {


    const contenedor =
        document.getElementById(
            "productos-carrito"
        );


    const cantidad =
        document.getElementById(
            "cantidad-carrito"
        );


    const total =
        document.getElementById(
            "total-carrito"
        );


    if (
        !contenedor ||
        !cantidad ||
        !total
    ) {

        return;

    }


    contenedor.innerHTML = "";


    let totalCompra = 0;



    // Si está vacío

    if (carrito.length === 0) {

        contenedor.innerHTML = `

            <p class="carrito-vacio">

                Tu carrito está vacío 💕

            </p>

        `;

    }



    // Mostrar productos

    carrito.forEach(
        (producto, index) => {


            totalCompra +=
                producto.precio;


            contenedor.innerHTML += `

                <div class="item-carrito">

                    <div>

                        <strong>
                            ${producto.nombre}
                        </strong>

                        <span>
                            $${producto.precio.toLocaleString("es-CO")}
                        </span>

                    </div>


                    <button
                        class="eliminar-btn"
                        onclick="eliminarProducto(${index})">

                        ❌

                    </button>

                </div>

            `;

        }
    );

                
    cantidad.textContent =
        carrito.length;


    total.textContent =
        totalCompra.toLocaleString(
            "es-CO"
        );

}



// ========================================
// ELIMINAR DEL CARRITO
// ========================================

function eliminarProducto(index) {


    carrito.splice(
        index,
        1
    );


    actualizarCarrito();

}



// ========================================
// MOSTRAR CARRITO
// ========================================

function mostrarCarrito() {


    const carritoVentana =
        document.getElementById(
            "carrito"
        );


    carritoVentana.style.display =
        "flex";

}



// ========================================
// CERRAR CARRITO
// ========================================

function cerrarCarrito() {


    const carritoVentana =
        document.getElementById(
            "carrito"
        );


    carritoVentana.style.display =
        "none";

}



// ========================================
// COMPRAR POR WHATSAPP
// ========================================

function comprarWhatsApp() {


    if (carrito.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;

    }


    let mensaje =
        "Hola Love Beauty 💕\n\n" +
        "Quiero realizar este pedido:\n\n";


    let total = 0;


    carrito.forEach(
        producto => {


            mensaje +=
                `• ${producto.nombre} - $${producto.precio.toLocaleString("es-CO")}\n`;


            total +=
                producto.precio;

        }
    );


    mensaje +=
        `\nTotal: $${total.toLocaleString("es-CO")}`;


    mensaje +=
        "\n\nGracias 💕";


    // Número de WhatsApp

    const numero =
        "573014997912";


    // Convertir mensaje correctamente

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );

}



// ========================================
// INICIAR PÁGINA
// ========================================

mostrarCategorias();

mostrarProductos();

actualizarCarrito();
