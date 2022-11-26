const firebaseConfig = {
  apiKey: "AIzaSyDrb9Lp5kg5P-HoJXWmOwtvKWcrFQXdifQ",
  authDomain: "contact-us-8b45e.firebaseapp.com",
  databaseURL: "https://contact-us-8b45e-default-rtdb.firebaseio.com",
  projectId: "contact-us-8b45e",
  storageBucket: "contact-us-8b45e.appspot.com",
  messagingSenderId: "118009505298",
  appId: "1:118009505298:web:ca201fca50525129231acb"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};