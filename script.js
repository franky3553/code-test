// Obtener elementos del DOM
const outputElement = document.getElementById('output');
const inputElement = document.getElementById('command-input');

// Función para mostrar texto en la terminal
function mostrarTexto(texto) {
  const lineElement = document.createElement('div');
  lineElement.classList.add('output-line');
  lineElement.textContent = texto;
  outputElement.appendChild(lineElement);
  outputElement.scrollTop = outputElement.scrollHeight;
}

// Función para ejecutar comandos
function ejecutarComando(comando) {
  // Lógica para procesar el comando
  // Aquí puedes agregar tus propias implementaciones de comandos

  // Ejemplo: Comando "saludar"
  if (comando === 'saludar') {
    mostrarTexto('¡Hola!');
  } else if (comando === 'ayuda') {
    mostrarTexto('Lista de comandos disponibles:');
    mostrarTexto(' - saludar: Muestra un saludo en la terminal.');
    mostrarTexto(' - ayuda: Muestra la lista de comandos disponibles.');
    // Agrega más comandos aquí
  } else {
    mostrarTexto('Comando no reconocido. Escribe "ayuda" para ver la lista de comandos disponibles.');
  }
}

// Evento de presionar Enter en el campo de entrada
inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const comando = inputElement.value;
    mostrarTexto(`>${comando}`);
    ejecutarComando(comando);
    inputElement.value = '';
  }
});

// Enfocar automáticamente el campo de entrada al cargar la página
window.addEventListener('load', function() {
  // Aplicar animación estilo interfaz gráfica futurista
  document.body.style.backgroundColor = '#000'; // Establecer el fondo negro

  // Mostrar el cuadro de texto
  document.querySelector('.input-container').classList.add('show-animation');

  // Mostrar la sección 1
  setTimeout(function() {
    document.querySelector('.header').classList.add('show-animation');
    document.querySelector('.output-container').classList.add('show-animation');
  }, 1000); // Retardo de 1 segundo

  // Mostrar la sección 2
  setTimeout(function() {
    document.querySelector('.input-line').classList.add('show-animation');
  }, 1500); // Retardo de 1.5 segundos

  // Mostrar la terminal gradualmente
  setTimeout(function() {
    document.querySelector('.terminal').style.opacity = '1';
  }, 2000); // Retardo de 2 segundos
});
