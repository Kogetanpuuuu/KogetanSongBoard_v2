// Firebase設定をここに貼ります
// Firebase Console > プロジェクトの設定 > マイアプリ > SDK設定と構成 の firebaseConfig を置き換えてね
const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  databaseURL: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const boardRef = db.ref("boards/kogetan");
