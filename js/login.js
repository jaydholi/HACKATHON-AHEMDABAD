// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
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

//inputs
// const email = document.getElementById('email-login').value;
// const password = document.getElementById('password-login').value;
const Login_btn = document.getElementById('login-btn');
Login_btn.addEventListener("click", (e)=> {
    alert("Clicked");
});
