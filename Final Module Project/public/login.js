// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeYmbMPUH0NraSWF_ISicFGmhWEs20Mu4",
    authDomain: "fmp-login-615ba.firebaseapp.com",
    projectId: "fmp-login-615ba",
    storageBucket: "fmp-login-615ba.appspot.com",
    messagingSenderId: "274036865929",
    appId: "1:274036865929:web:5437fcc283d525cc337f58"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      console.log(success.user.uid);
      window.location.replace('custom.html')
    })
    .catch(function (err) {
      console.log(err);
    });

  console.log(obj);
}