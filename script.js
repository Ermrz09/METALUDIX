// Acceder al elemento de video
const video = document.getElementById('camera-stream');

// Configurar acceso a la cámara trasera
navigator.mediaDevices
    .getUserMedia({
        video: {
            facingMode: { exact: "environment" } // Solicitar la cámara trasera
        }
    })
    .then((stream) => {
        // Configurar el stream de la cámara como fondo del video
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error('Error al acceder a la cámara trasera:', err);
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
