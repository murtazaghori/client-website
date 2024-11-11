const firebaseConfig = {
    apiKey: "AIzaSyCQAM80R4Tp56XsK4MNATewAjuT_QAW9dM",
    authDomain: "food-6e86f.firebaseapp.com",
    projectId: "food-6e86f",
    storageBucket: "food-6e86f.firebasestorage.app",
    messagingSenderId: "1080830121465",
    appId: "1:1080830121465:web:145e205e20f700da155928"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  
  function signIn(event) {
    event.preventDefault();  // Form submit ko rokne ke liye
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    console.log(name);  // Debugging ke liye console mein print
    console.log(email);
    console.log(password);
  
    // Firebase signup
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        var user = userCredential.user;
        console.log(user);
        alert('Sign-up successful!');
        window.location.href = "food.html";  // Optional redirect
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert('Error: ' + errorMessage);
      });
  }
  

   
 

 


 