// Typewriter Effect
const words = ["AI Engineer", "Innovator", "Tech Enthusiast", "Web Developer",  "Machine Learning Engineer", "Data Scientist", "Software Developer", "Problem Solver", "AI Researcher" , "Ambikesh Srivastava"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function typeEffect() {
    currentWord = words[i];
    document.getElementById("typewriter").textContent = isDeleting
        ? currentWord.substring(0, j--)
        : currentWord.substring(0, j++);

    if (!isDeleting && j === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Hamburger Menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Hide and Show Navbar on Scroll
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scroll Up: Show Navbar
        navbar.style.top = "0";
    } else {
        // Scroll Down: Hide Navbar
        navbar.style.top = "-70px";
    }

    prevScrollPos = currentScrollPos;
};
