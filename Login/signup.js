document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");


    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

 
    messageDiv.style.display = "block";
    messageDiv.innerText = "Signup successful! Redirecting to login page...";
    messageDiv.style.backgroundColor = "#4CAF50";
    re

 
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});
