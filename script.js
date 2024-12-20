// Fullscreen toggle function
function toggleFullScreen() {
    const docEl = document.documentElement;

    if (!document.fullscreenElement) {
        // Intentar activar pantalla completa
        const requestFullScreen =
            docEl.requestFullscreen ||
            docEl.webkitRequestFullscreen ||
            docEl.mozRequestFullScreen ||
            docEl.msRequestFullscreen;

        if (requestFullScreen) {
            requestFullScreen.call(docEl).catch((err) => {
                console.error(`Error attempting fullscreen: ${err.message}`);
                alert('No se pudo activar pantalla completa.');
            });
        } else {
            alert('Pantalla completa no soportada en este navegador.');
        }
    } else {
        // Salir de pantalla completa
        const exitFullScreen =
            document.exitFullscreen ||
            document.webkitExitFullscreen ||
            document.mozCancelFullScreen ||
            document.msExitFullscreen;

        if (exitFullScreen) {
            exitFullScreen.call(document).catch((err) => {
                console.error(`Error exiting fullscreen: ${err.message}`);
                alert('No se pudo salir de pantalla completa.');
            });
        }
    }
}

// Track Mouse Movements for 360 Effect
document.addEventListener('mousemove', function(event) {
    const panorama = document.getElementById('panorama');
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    
    // Adjust the background position based on mouse movement
    panorama.style.backgroundPosition = `${x}% ${y}%`;
});
