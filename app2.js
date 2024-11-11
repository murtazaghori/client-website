 
const firebaseConfig = {
    apiKey: "AIzaSyCQAM80R4Tp56XsK4MNATewAjuT_QAW9dM",
    authDomain: "food-6e86f.firebaseapp.com",
    databaseURL: "https://food-6e86f-default-rtdb.firebaseio.com",
    projectId: "food-6e86f",
    storageBucket: "food-6e86f.firebasestorage.app",
    messagingSenderId: "1080830121465",
    appId: "1:1080830121465:web:145e205e20f700da155928"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Save form data to Firebase
function saveData(event) {
    event.preventDefault();  // Prevent the form from refreshing the page

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;

    // Validation
    if (!name || !email || !password || !message) {
        alert("All fields are required!");
        return;
    }

    // Create user object
    const userObj = {
        userName: name,
        userEmail: email,
        userPassword: password,
        userMessage: message
    };

    // Push data to Firebase Realtime Database
    db.ref("users").push(userObj)
        .then(() => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();  // Reset form fields
        })
        .catch((error) => {
            console.error("Error saving data: ", error);
            alert("Error sending message.");
        });
}

// Add event listener to the form submit event
document.getElementById("contactForm").addEventListener("submit", saveData);



