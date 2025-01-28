import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCY_fhibH_JU1oNt2_4naNm7trv3QgQY1o",
  authDomain: "public-welfare-app-9619d.firebaseapp.com",
  projectId: "public-welfare-app-9619d",
  storageBucket: "public-welfare-app-9619d.firebasestorage.app",
  messagingSenderId: "738188291859",
  appId: "1:738188291859:web:9a4c505d38bb305a1974e6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

function showAlert(message) {
  const alertModal = new bootstrap.Modal(document.getElementById("alertModal"));
  document.getElementById("alertModalBody").innerText = message;
  alertModal.show();
}

const forgotPasswordButton = document.getElementById("forgot-password");
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const nameSignupIn = document.getElementById("name-signup");
const phoneSignupIn = document.getElementById("phone-signup");
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword, name, phone;
createacctbtn.addEventListener("click", async function() {
  var isVerified = true;
  name = nameSignupIn.value;
  phone = phoneSignupIn.value;
  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    showAlert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    showAlert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (!name || !phone || !signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
    showAlert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        phone: phone,
        email: signupEmail
      });
      // localStorage.setItem('Name', nameSignupIn.value);
      showAlert("Success! Account created.");
      window.location.reload();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "", errorMessage);
      showAlert(errorCode + " " + errorMessage);
    }
  }
});

submitButton.addEventListener("click", function() {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Success! Welcome back!");
      showAlert("Success! Welcome back!");
      localStorage.setItem('email', email);
      window.location.href="../../index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      if(error){
        showAlert("Error occurred. Try again.");
      }
      // window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", function() {
  main.style.display = "none";
  createacct.style.display = "block";
});

forgotPasswordButton.addEventListener("click", function() {
  const email = emailInput.value;
  if (!email) {
    showAlert("Please enter your email address.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      showAlert("Password reset email sent! Check your inbox.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      showAlert("Error: " + errorMessage);
    });
});
// returnBtn.addEventListener("click", function() {
//   main.style.display = "block";
//   createacct.style.display = "none";
// });