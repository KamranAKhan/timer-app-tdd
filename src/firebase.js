import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8H0OGPGztn8VTlBwr37uOaLnJF4Y7HSw",
    authDomain: "timer-app-c8a54.firebaseapp.com",
    databaseURL: "https://timer-app-c8a54.firebaseio.com",
    projectId: "timer-app-c8a54",
    storageBucket: "timer-app-c8a54.appspot.com",
    messagingSenderId: "41346094839",
    appId: "1:41346094839:web:be1fb218c86b6fd074a5f2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const InitializeFirebase = () => {
  Notification.requestPermission().then((permission) => {
    console.log(permission)
    if (permission === 'granted') {
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
            console.log(currentToken)            
      
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
          // Show permission UI.
      
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
  
      });
  
    }
  
  })
}