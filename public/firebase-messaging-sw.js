importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyC8H0OGPGztn8VTlBwr37uOaLnJF4Y7HSw",
    authDomain: "timer-app-c8a54.firebaseapp.com",    
    projectId: "timer-app-c8a54",    
    messagingSenderId: "41346094839",
    appId: "1:41346094839:web:be1fb218c86b6fd074a5f2"
})

firebase.messaging();