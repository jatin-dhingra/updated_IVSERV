//--------------------------------------------

function initializeApp() {

    // var firebaseConfig = {
    //             apiKey: "AIzaSyBslI48Jg3RQbYedFVWFgTNqkpRS312bS8",
    //             authDomain: "ivserv.firebaseapp.com",
    //             projectId: "ivserv",
    //             storageBucket: "ivserv.appspot.com",
    //             messagingSenderId: "998952202854",
    //             appId: "1:998952202854:web:27d961a9a1d9cdbc9573a7",
    //             measurementId: "G-FFH9GFDZYR"
    //         };
    // // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const firestore= firebase.firestore()

    // Listen for form submit
    var messagesRef = firebase.database().ref('messages');
    document.getElementById('contactForm').addEventListener('submit', submitForm);

    // Submit form
    function submitForm(e){
        e.preventDefault();

        //Get value
        var name = getInputVal('name');
        var email = getInputVal('email');
        var subject = getInputVal('subject');
        var message = getInputVal('message');

        saveMessage(name,email,subject, message);

        // Show alert
        document.querySelector('.alert').style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        },2000);

        // Clear form
        document.getElementById('contactForm').reset();
    }

    // Function to get form value
    function getInputVal(id){
        return document.getElementById(id).value;
    }

    // Save message to firebase
    function saveMessage(name, email, subject, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: name,
          email:email,
          subject:subject,
          message:message
        });
}
}

///////////////////////////////////////

function initializeApp() {
  var firebaseConfig = {
        apiKey: "AIzaSyBslI48Jg3RQbYedFVWFgTNqkpRS312bS8",
        authDomain: "ivserv.firebaseapp.com",
        projectId: "ivserv",
        storageBucket: "ivserv.appspot.com",
        messagingSenderId: "998952202854",
        appId: "1:998952202854:web:27d961a9a1d9cdbc9573a7",
        measurementId: "G-FFH9GFDZYR"
    };
  

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const firestore = firebase.firestore();

  // Listen for form submit
  const form = document.getElementById("submit-btn");
  form.addEventListener("submit", submitForm);
  const db = firestore.collection("ContactFormData");

  // Submit form
  function submitForm(e) {
    e.preventDefault();

    //Get value
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, subject, message);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("contactForm").reset();
  }

  // Function to get form value
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  const saveMessage = function (name,  email, subject, message) {
    firestore.collection("ContactFormData").add({
      name,
    
      email,
      subject,
      message,
    });
  };
}



const but= document.querySelector('#submit-btn');

const formdata=document.querySelector('#contactForm');
but.addEventListener('click', (e)=>{
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
    e.preventDefault();
    console.log(name);
    console.log(subject);
    formdata.reset();

})



function getInputVal(id) {
        return document.getElementById(id).value;
      }
