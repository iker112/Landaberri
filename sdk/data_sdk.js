window.data_sdk = {
    create: async function(table, data) {
        let items = JSON.parse(localStorage.getItem(table) || "[]");
        const newItem = { ...data, id: Date.now().toString() };
        items.push(newItem);
        localStorage.setItem(table, JSON.stringify(items));
        return newItem; // Devolvemos el objeto, no un .isOk
    },
    list: async function(table, query = {}) {
        let items = JSON.parse(localStorage.getItem(table) || "[]");
        if (query.where) {
            const key = Object.keys(query.where)[0];
            const value = query.where[key];
            return items.filter(item => item[key] === value);
        }
        return items;
    },
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
// Creamos el alias para que ambos funcionen
window.dataSdk = window.data_sdk;
