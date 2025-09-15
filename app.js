let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre); // Agrega el nombre al array
        input.value = ""; // Limpia el input
        mostrarAmigos(); // Actualiza la lista en pantalla
        botonAdd.classList.remove('activo'); // Quita el color verde    
    }else {
        alert("Por favor, inserte un nombre.");
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

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const lista = document.getElementById('listaAmigos');
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indice];
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${nombreSorteado}</strong></li>`;
    amigos = []; // Vacía el array de amigos
    lista.innerHTML = ""; // Limpia la lista en pantalla
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