window.element_sdk = {
    // Esta es la función que detiene el "Cargando..."
    init: function(config) {
        console.log("SDK de Elementos inicializado localmente");
        // Devolvemos una promesa resuelta inmediatamente
        return Promise.resolve();
    },
    // Otras funciones que usa tu index.html
    refresh: function() {
        window.location.reload();
    }
};

// Algunos códigos de Canva buscan esto directamente
window.initializeApp = function() {
    return Promise.resolve();
};
