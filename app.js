let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre); // Agrega el nombre al array
        input.value = ""; // Limpia el input
        mostrarAmigos(); // Actualiza la lista en pantalla
        botonAdd.classList.remove('activo'); // Quita el color verde    
    }
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Cambia el color del botón según el input
const inputAmigo = document.getElementById('amigo');
const botonAdd = document.querySelector('.button-add');

inputAmigo.addEventListener('input', function() {
    if (inputAmigo.value.trim() !== "") {
        botonAdd.classList.add('activo');
    } else {
        botonAdd.classList.remove('activo');
    }
});

inputAmigo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
})