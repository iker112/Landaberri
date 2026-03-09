// Definimos el objeto con el nombre exacto que busca el index.html
window.element_sdk = {
    init: function() {
        console.log("SDK de Elementos inicializado localmente");
        // Forzamos que la pantalla de carga se oculte si el index no lo hace
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
        return Promise.resolve();
    },
    refresh: function() {
        window.location.reload();
    }
};

// Compatibilidad por si acaso
window.elementSdk = window.element_sdk;
