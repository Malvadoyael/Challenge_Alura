
let amigos = [];


function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  // Validar campo con algun nombre
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // almacenar nombre
  amigos.push(nombre);

  // Limpia el cuadro de texto
  input.value = "";

  // Actualiza la lista
  actualizarListaAmigos();
}

// Función para actualizar el listado en la vista
function actualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ""; 

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo de forma aleatoria
function sortearAmigo() {
  // Verifica que la lista no esté vacía
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Selecciona un nombre al azar
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Muestra el nombre que se sorteó
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}