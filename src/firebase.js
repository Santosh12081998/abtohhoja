// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyAiYlKtQvRh-fpJBKQkI-r8zh1XUBL0SDk",
//     authDomain: "education-mantra-67e83.firebaseapp.com",
//     databaseURL: "https://education-mantra-67e83-default-rtdb.firebaseio.com",
//     projectId: "education-mantra-67e83",
//     storageBucket: "education-mantra-67e83.appspot.com",
//     messagingSenderId: "125457468377",
//     appId: "1:125457468377:web:ba59694d45edfc66be27c8",
//     measurementId: "G-EY41C53GCH"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiYlKtQvRh-fpJBKQkI-r8zh1XUBL0SDk",
  authDomain: "education-mantra-67e83.firebaseapp.com",
  databaseURL: "https://education-mantra-67e83-default-rtdb.firebaseio.com",
  projectId: "education-mantra-67e83",
  storageBucket: "education-mantra-67e83.appspot.com",
  messagingSenderId: "125457468377",
  appId: "1:125457468377:web:ba59694d45edfc66be27c8",
  measurementId: "G-EY41C53GCH"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export default app;
const analytics = getAnalytics(app);