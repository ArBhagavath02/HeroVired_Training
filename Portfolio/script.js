
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

cancelBtn.onclick = hideNavMenu;

let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

  document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get the current date and time
    const currentDate = new Date().toLocaleString();

    // Create an object to store the user info
    const userInfo = {
      username: username,
      email: email,
      password: password,
      submittedAt: currentDate
    };

    // Store the user info in local storage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Display a success message
    alert('Form submitted successfully!');

    // Log the info in the console
    console.log('User Information:', userInfo);
  });