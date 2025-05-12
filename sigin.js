import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFER1l35iWaqZ1K66bK-bcv3XeRGtRBgA",
  authDomain: "login-example-16032.firebaseapp.com",
  projectId: "login-example-16032",
  storageBucket: "login-example-16032.firebasestorage.app",
  messagingSenderId: "584863301469",
  appId: "1:584863301469:web:6557414ac2fa67d5c432b4",
  measurementId: "G-8GBXP43TSB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Registration functionality
const registerButton = document.getElementById("submit");
if (registerButton) {
  registerButton.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account created successfully!");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
      });
  });
}
//Login functionality

const loginButton = document.getElementById("log");
if (loginButton) {
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        
  
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}