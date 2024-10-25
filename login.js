  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCQdoqkDWkY6FY9KwYSVnujkdTbZiJtkOk",
    authDomain: "grand-login-3654d.firebaseapp.com",
    projectId: "grand-login-3654d",
    storageBucket: "grand-login-3654d.appspot.com",
    messagingSenderId: "551913261159",
    appId: "1:551913261159:web:f53e4ffabd2878c3ab6cc2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Firebase Auth
  const auth = getAuth(app);

  //submit button
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event) {
    event.preventDefault()

    //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // email and password filling
  if (email === "" || password === "") {
    alert("Please enter both email and password");
    return;
  }

    // login
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //login
        const user = userCredential.user;
        alert("Login Successful..")
        window.location.href = "dashboard.html";
        
    })

    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

    //  error handling
        if (errorCode === 'auth/invalid-email') {
            alert("Invalid email format.");
        } else if (errorCode === 'auth/invalid-credential') {
            alert("Invalid credentials provided.");
        } else {
            alert(errorMessage); // default error
        }
        
    });
  })
