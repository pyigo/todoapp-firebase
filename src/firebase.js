import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmevzsQdqbVU5tLB5zsT2xQGsLAgQnGxY",
    authDomain: "todo-app-1dda7.firebaseapp.com",
    projectId: "todo-app-1dda7",
    storageBucket: "todo-app-1dda7.appspot.com",
    messagingSenderId: "922342939342",
    appId: "1:922342939342:web:d943e6526d73ece5554e9f",
    measurementId: "G-YC2HD7BE8J"
});

const database = firebaseApp.firestore();

export { databse }