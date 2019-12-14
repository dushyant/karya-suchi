import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAl2oj-HLN2Mj9IEU3CycXrDI5ntFDgFXA",
  authDomain: "my-day-planner.firebaseapp.com",
  databaseURL: "https://my-day-planner.firebaseio.com",
  projectId: "my-day-planner",
  storageBucket: "my-day-planner.appspot.com",
  messagingSenderId: "596649650311",
  appId: "1:596649650311:web:8f7112edbe95fc4208b022",
  measurementId: "G-3HZK3D2YRF"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };