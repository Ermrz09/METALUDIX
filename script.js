// Acceder a la cámara del dispositivo y mostrarla como fondo
const video = document.getElementById('camera-stream');

// Solicitar acceso a la cámara
navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error('Error al acceder a la cámara:', err);
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
