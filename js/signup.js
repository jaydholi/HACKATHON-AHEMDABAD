// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXR0d7ebPhbiCynLjKv53C736MbeLb1zo",
  authDomain: "public-welfare-app.firebaseapp.com",
  projectId: "public-welfare-app",
  storageBucket: "public-welfare-app.firebasestorage.app",
  messagingSenderId: "800549217750",
  appId: "1:800549217750:web:a7faa4b4acc524c9ec7077",
  measurementId: "G-N705VN2022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authur = getAuth(app);

//inputs
const signup_btn = document.getElementById('signup-btn');
signup_btn.addEventListener('click', e => {
    e.preventDefault();
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
    
    createUserWithEmailAndPassword(authur, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("User Signed Up");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
      });
});