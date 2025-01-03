import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGAs5fcf8780Bun8F3qEiIjug0IKV32Nc",
  authDomain: "byte-rangers.firebaseapp.com",
  projectId: "byte-rangers",
  storageBucket: "byte-rangers.firebasestorage.app",
  messagingSenderId: "232863791122",
  appId: "1:232863791122:web:1087c0317984f2328cc0cb",
  measurementId: "G-CBRBFF5FES"

};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };