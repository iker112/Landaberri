const sdkLogic = {
    init: function() {
        console.log("SDK Local activado correctamente");
        // Aseguramos que el cargando se quite
        const loader = document.getElementById('loading-screen');
        if (loader) loader.classList.add('hidden');
        return Promise.resolve();
    },
    refresh: function() {
        window.location.reload();
    }
};

// Definimos ambos nombres por si la IA de Canva usa uno u otro
window.element_sdk = sdkLogic;
window.elementSdk = sdkLogic;
