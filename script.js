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
