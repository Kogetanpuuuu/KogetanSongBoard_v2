const firebaseConfig = {
  apiKey: "AIzaSyBn9tMaF0uMb_8nqc9NDErfThpbWyS9Fbk",
  authDomain: "kogetansongboard.firebaseapp.com",
  databaseURL: "https://kogetansongboard-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kogetansongboard",
  storageBucket: "kogetansongboard.firebasestorage.app",
  messagingSenderId: "179579414446",
  appId: "1:179579414446:web:91bd93672640e60e04ca3f",
  measurementId: "G-9KQM60TQ4N"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const boardRef = db.ref("boards/kogetan/main");
