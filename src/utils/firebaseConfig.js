const firebase = require('firebase');
const admin = require('firebase-admin');


const firebaseConfig = {
    apiKey: 'AIzaSyAqjoNlW4XaBN1z8F0UAt_94gO5HH0ZF6U',
    authDomain: 'savanapointofficial.firebaseapp.com',
    databaseURL: 'https://savanapointofficial.firebaseio.com',
    projectId: 'savanapointofficial',
    storageBucket: 'savanapointofficial.appspot.com',
    messagingSenderId: '348950683204',
    appId: '1:348950683204:web:29e5d97d0283c0b0452611',
    measurementId: 'G-8XTC5PMX5E'
  };


const serviceAccount = require('./serviceAccountKey.json');
firebase.initializeApp(firebaseConfig)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://savanapointofficial.firebaseio.com'
});




module.exports = {
  AUTH: firebase.auth(),
  FIRESTORE: firebase.firestore(),
  STORAGE: admin.storage(),
  DATABASE: firebase.database(),
  ADMIN: admin.auth()
}