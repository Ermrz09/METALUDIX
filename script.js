// Seleccionar el elemento de video
const video = document.getElementById('camera-stream');

// Configurar acceso a la cámara trasera
navigator.mediaDevices
    .getUserMedia({
        video: {
            facingMode: "environment", // Solicitar cámara trasera
        },
        audio: false, // No se necesita audio
    })
    .then((stream) => {
        // Configurar el flujo de video en el elemento <video>
        video.srcObject = stream;
    })
    .catch((err) => {
        // Manejar errores
        console.error('No se pudo acceder a la cámara:', err);
        alert('No se pudo activar la cámara trasera. Verifica los permisos del dispositivo.');
    });

// Configurar el efecto en el logo
const logo = document.querySelector('.logo');
const text = logo.textContent;
logo.innerHTML = ''; // Limpia el contenido

// Divide las letras y las envuelve en spans
text.split('').forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    logo.appendChild(span);
});
