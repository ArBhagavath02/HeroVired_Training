document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");


    if (username === storedUsername && password === storedPassword) {
        
        messageDiv.style.display = "block";
        messageDiv.innerText = "Login successful!";
        messageDiv.style.backgroundColor = "#4CAF50";
        window.location.href="https://hero-vired-training-tau.vercel.app/";

        setTimeout(() => {
            messageDiv.style.display = "none";
        }, 3000);

        
    } else {

        messageDiv.style.display = "block";
        messageDiv.innerText = "Invalid username or password!";
        messageDiv.style.backgroundColor = "#f44336";

        setTimeout(() => {
            messageDiv.style.display = "none";
        }, 3000);
    }
});
