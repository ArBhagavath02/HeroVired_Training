document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const dateTime = new Date();

    // Log the data with date and time in console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    console.log("Date and Time: " + dateTime.toLocaleString());

    // Show popup
    document.getElementById("popup").style.display = "flex";
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Show resume on button click
document.getElementById("resume-btn").addEventListener("click", function() {
    const resumeUrl = 'resume.pdf'; // Replace with the actual resume file path
    window.open(resumeUrl);

    // Option to download
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'resume.pdf';
    downloadLink.click();
})