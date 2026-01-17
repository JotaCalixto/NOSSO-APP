// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBahDvZPq78LQLlKv-1tqAskZJWP9UXfb0",
  authDomain: "nosso-app-b9917.firebaseapp.com",
  projectId: "nosso-app-b9917",
  storageBucket: "nosso-app-b9917.firebasestorage.app",
  messagingSenderId: "994549530268",
  appId: "1:994549530268:web:96f8dc4cb2d9586b9f7759",
  measurementId: "G-PSZ2969HZ9"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || 'Nosso App';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: 'nosso-app-icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
