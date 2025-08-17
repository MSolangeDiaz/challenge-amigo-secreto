let listaAmigos = [];
let maxAmigos = 10;

// Agregar amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    // Validar que no esté vacío el campo 
    if (nombre === '') {
        alert('Debes ingresar un nombre para añadir a la lista de sorteados.');
        return;
    }

    // Si el nombre ya existe, pedir apellido para identificarlo
    if (listaAmigos.includes(nombre)) {
        let apellido = prompt("Ese nombre ya existe, por favor ingresa un apellido para diferenciarlo");
        if (apellido && apellido.trim() !== '') {
            nombre = nombre + " " + apellido.trim();
        } else {
            alert('Debes ingresar un apellido para diferenciar.');
            return;
        }
    }
    
 // Mostrar lista en pantalla
function mostrarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    listaAmigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        ul.appendChild(li);
    });
}   
    
// Limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
    
    // Agregar si no se superó el máximo de diez amigos
    if (listaAmigos.length < maxAmigos) {
        listaAmigos.push(nombre);
        mostrarLista();
        limpiarCaja();
    } else {
        alert('Ya ingresaste el máximo de 10 amigos.');
    }
}

// Sortear un amigo al azar,tiene que haber al menos dos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Debes ingresar al menos 2 amigos para poder hacer el sorteo.');
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const ganador = listaAmigos[indice];

    mostrarResultado(ganador);
}


// Mostrar resultado en pantalla
function mostrarResultado(resultado) {
    let ul = document.getElementById('resultado');
    ul.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${resultado}`;
    ul.appendChild(li);
}


// Reiniciar juego?
