// Simulación del SDK de datos de Canva usando LocalStorage
const data_sdk = {
    // Función para guardar datos (como crear un usuario)
    create: async function(table, data) {
        console.log(`Guardando en tabla ${table}:`, data);
        let items = JSON.parse(localStorage.getItem(table) || "[]");
        
        // Añadimos un ID único si no lo tiene
        const newItem = { ...data, id: Date.now().toString() };
        items.push(newItem);
        
        localStorage.setItem(table, JSON.stringify(items));
        return newItem;
    },

    // Función para buscar datos (como el login)
    list: async function(table, query = {}) {
        let items = JSON.parse(localStorage.getItem(table) || "[]");
        
        // Si hay una consulta (ej: buscar por email)
        if (query.where) {
            const key = Object.keys(query.where)[0];
            const value = query.where[key];
            return items.filter(item => item[key] === value);
        }
        return items;
    },

    // Para actualizar (ej: cambiar lo que ha comido un alumno)
    update: async function(table, id, data) {
        let items = JSON.parse(localStorage.getItem(table) || "[]");
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...data };
            localStorage.setItem(table, JSON.stringify(items));
        }
        return items[index];
    }
};

window.data_sdk = data_sdk;
