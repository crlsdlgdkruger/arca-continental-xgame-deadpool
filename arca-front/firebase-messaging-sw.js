importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBlx2-BsARvRTMnCLZE6cyAaYLPHEGVqRg",
    authDomain: "arca-front.firebaseapp.com",
    projectId: "arca-front",
    storageBucket: "arca-front.appspot.com",
    messagingSenderId: "498923063636",
    appId: "1:498923063636:web:64a42eae70e05b2fb960c1",
    measurementId: "G-NGVVT3JSS4"
};

// Inicializar Firebase en el Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manejar notificaciones push
messaging.onBackgroundMessage(function (payload) {
    console.log('Mensaje en segundo plano recibido: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/assets/images/deadpool_logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

messaging.requestPermission()
    .then(function () {
        console.log('Permiso concedido');
        return messaging.getToken();
    })
    .then(function (token) {
        console.log('Token de notificación: ', token);
        // Envía el token al backend para almacenar la suscripción del usuario
    })
    .catch(function (error) {
        console.error('Error obteniendo el token de notificación', error);
    });
