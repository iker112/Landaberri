import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKdciOWkSuw348_NCBf19CFHnm2fTQYQk",
  authDomain: "landaberri-2c6e6.firebaseapp.com",
  projectId: "landaberri-2c6e6",
  storageBucket: "landaberri-2c6e6.appspot.com",
  messagingSenderId: "522776777885",
  appId: "1:522776777885:web:77c424e8e8e264c583757074",
  measurementId: "G-69VZ71V37B"
};

// Inicializamos Firebase y la Base de Datos
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);