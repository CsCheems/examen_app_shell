
let productos = {};


async function cargarDatos() {
try {
  const respuesta = await fetch("./data/data.json");
  productos = await respuesta.json();
  console.log("Datos cargados:", productos);
} catch (error) {
  console.error("Error al cargar los datos:", error);
}
}

async function mostrarCategoria(categoria) {
const contenedor = document.getElementById('contenido');
contenedor.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Cargando...</p>';


if (!productos || Object.keys(productos).length === 0) {
  await cargarDatos();
}

contenedor.innerHTML = ''; 

if (productos[categoria]) {
  productos[categoria].forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${item.nombre}</h3><p>${item.precio}</p>`;
    contenedor.appendChild(card);
  });
} else {
  contenedor.innerHTML = `<p style="grid-column:1/-1; text-align:center;">No hay productos en la categoría "${categoria}"</p>`;
}
}

// Registrar Service Worker
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js')
  .then(() => console.log("Service Worker registrado"))
  .catch(err => console.log("Error SW:", err));
}

