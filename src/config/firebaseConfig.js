import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCQ65kpNUPZeih9N4s45dUvx2AQBKFLGok",
  authDomain: "karya-suchi.firebaseapp.com",
  databaseURL: "https://karya-suchi.firebaseio.com",
  projectId: "karya-suchi",
  storageBucket: "karya-suchi.appspot.com",
  messagingSenderId: "907885588791",
  appId: "1:907885588791:web:fa4e71a52d91bb8e5aeab2",
  measurementId: "G-HRY02W15EE"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };