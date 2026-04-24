import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPdRTJrymuX1sIjIw1pGfWga4k56V9-ok",
  authDomain: "contact-page-fbfce.firebaseapp.com",
  projectId: "contact-page-fbfce",
  storageBucket: "contact-page-fbfce.firebasestorage.app",
  messagingSenderId: "452319138891",
  appId: "1:452319138891:web:dc44f4f3b669d40b4329ce"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  

export { db };