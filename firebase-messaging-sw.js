// Importar e configurar o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";

// A sua configuração do Firebase vai aqui.
// É importante que seja a mesma do seu ficheiro HTML principal.
const firebaseConfig = {
    apiKey: "AIzaSyAaedVRibTzBXEzJZgeroR9LNgNs_H6e4k",
    authDomain: "petalerta-f62d6.firebaseapp.com",
    projectId: "petalerta-f62d6",
    storageBucket: "petalerta-f62d6.appspot.com",
    messagingSenderId: "388011468744",
    appId: "1:388011468744:web:f8867023355648132e02fd"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Este ficheiro é intencionalmente simples. A sua principal função
// é estar presente para que o navegador possa receber notificações em segundo plano.
console.log("Firebase Messaging Service Worker registado com sucesso.");
