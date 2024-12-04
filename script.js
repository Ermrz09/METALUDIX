// Seleccionar el elemento de video y el contenedor del fondo
const video = document.getElementById('camera-stream');
const cameraBackground = document.querySelector('.camera-background');

// Intentar activar la cámara trasera
navigator.mediaDevices
    .getUserMedia({
        video: { facingMode: "environment" }, // Solicitar cámara trasera
        audio: false
    })
    .then((stream) => {
        // Configurar el flujo de video como fondo
        video.srcObject = stream;
        video.style.display = "block"; // Mostrar el video
        cameraBackground.style.background = "transparent"; // Eliminar fondo metálico
    })
    .catch((err) => {
        // Manejar errores y mostrar fondo personalizado
        console.error('No se pudo acceder a la cámara:', err);
        cameraBackground.style.background = "url('https://drive.google.com/uc?id=1HmlhOA_NHFU7rzXtpa4IcUJW6GBFZEEO') no-repeat center center";
        cameraBackground.style.backgroundSize = "cover"; // Ajustar fondo
    });

// Configurar el efecto animado en el logo
const logo = document.querySelector('.logo');
const text = logo.textContent;
logo.innerHTML = ''; // Limpia el contenido

// Divide las letras y las envuelve en spans
text.split('').forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    logo.appendChild(span);
});
