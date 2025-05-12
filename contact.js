// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBFER1l35iWaqZ1K66bK-bcv3XeRGtRBgA",
  authDomain: "login-example-16032.firebaseapp.com",
  databaseURL : "https://login-example-16032-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "login-example-16032",
  storageBucket: "login-example-16032.firebasestorage.app",
  messagingSenderId: "584863301469",
  appId: "1:584863301469:web:6557414ac2fa67d5c432b4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Form submission logic
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ✅ Always fetch inputs before resetting the form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }
  // ✅ Push to database
  const newMessageRef = database.ref("messages").push();
  newMessageRef
    .set({
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toISOString()
    })
    .then(() => {
      alert("Thank you! We'll get back to you soon.");
      form.reset(); // ✅ Use form reference here
    })
    .catch((error) => {
      console.error("Error saving message:", error);
      alert("There was a problem submitting your message. Try again later.");
    });
});
