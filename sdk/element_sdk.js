// Forzamos ambos nombres para que no haya errores
const sdkLogic = {
    init: function() {
        console.log("SDK Local activado");
        // Quitamos la pantalla de carga por la fuerza
        const loader = document.getElementById('loading-screen');
        if (loader) loader.classList.add('hidden');
        
        return Promise.resolve();
    },
    refresh: function() {
        window.location.reload();
    }
};

window.element_sdk = sdkLogic;
window.elementSdk = sdkLogic;
