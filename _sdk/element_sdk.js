// Simulación del SDK de elementos de Canva
window.Canva = window.Canva || {};
window.element_sdk = {
    // Permite que el código llame a funciones de interfaz sin romper la página
    init: function() {
        console.log("Element SDK cargado localmente");
    },
    refresh: function() {
        window.location.reload();
    }
};
