var config = {
            apiKey: "AIzaSyBslI48Jg3RQbYedFVWFgTNqkpRS312bS8",
            authDomain: "ivserv.firebaseapp.com",
            projectId: "ivserv",
            storageBucket: "ivserv.appspot.com",
            messagingSenderId: "998952202854",
            appId: "1:998952202854:web:27d961a9a1d9cdbc9573a7",
            measurementId: "G-FFH9GFDZYR"
        };
    
firebase.initializeApp(config);



var messagesRef = firebase.database().ref('messages');

document.getElementById("myTextarea").rows = "10";
document.getElementById("myTextarea").cols = "30";

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    saveMessage(name, email, subject, message);
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },2000);
  
    // Clear form
    document.getElementById('contactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}


function saveMessage(name,  email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject:subject,
      message:message
    });
  }
