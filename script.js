// Variables
const boxiMessage = document.getElementById('boxi-message');
let isListening = false;

// Voice Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.continuous = true;

    // Start recognition and always reset after usage
    function startRecognition() {
        recognition.start();
        boxiMessage.innerText = 'Di "Boxi" para activar comandos.';
    }

    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();

        if (transcript.includes('boxi')) {
            isListening = true;
            boxiMessage.innerText = '¡Boxi está escuchando! Di un comando.';
        } else if (isListening) {
            if (transcript.includes('pantalla completa') || transcript.includes('fullscreen')) {
                toggleFullScreen();
                boxiMessage.innerText = 'Pantalla completa activada.';
            } else if (transcript.includes('hub de juego')) {
                document.getElementById('hub-juego').scrollIntoView({ behavior: 'smooth' });
                boxiMessage.innerText = 'Abriendo HUB de Juego.';
            } else if (transcript.includes('hub de educación')) {
                document.getElementById('hub-educacion').scrollIntoView({ behavior: 'smooth' });
                boxiMessage.innerText = 'Abriendo HUB de Educación.';
            } else if (transcript.includes('hub de entretenimiento')) {
                document.getElementById('hub-entretenimiento').scrollIntoView({ behavior: 'smooth' });
                boxiMessage.innerText = 'Abriendo HUB de Entretenimiento.';
            } else if (transcript.includes('hub de trabajo')) {
                document.getElementById('hub-trabajo').scrollIntoView({ behavior: 'smooth' });
                boxiMessage.innerText = 'Abriendo HUB de Trabajo.';
            } else {
                boxiMessage.innerText = 'Comando no reconocido. Intenta de nuevo.';
            }
            isListening = false;
        }
    };

    recognition.onerror = (event) => {
        console.error('Error en el reconocimiento de voz:', event.error);
        boxiMessage.innerText = 'Error al escuchar. Reiniciando...';
        startRecognition(); // Restart recognition on error
    };

    recognition.onend = () => {
        // Always restart recognition when it stops
        startRecognition();
    };

    // Start recognition for the first time
    startRecognition();
} else {
    boxiMessage.innerText = 'Tu navegador no soporta reconocimiento de voz.';
}

// Fullscreen toggle function
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting fullscreen: ${err.message}`);
            boxiMessage.innerText = 'No se pudo activar pantalla completa.';
        });
    } else {
        document.exitFullscreen().catch((err) => {
            console.error(`Error exiting fullscreen: ${err.message}`);
            boxiMessage.innerText = 'No se pudo salir de pantalla completa.';
        });
    }
}
