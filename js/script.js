// Typewriter Effect
const words = [
    "an AI Engineer",
    "an Innovator",
    "a Tech Enthusiast",
    "a Web Developer",
    "a Machine Learning Engineer",
    "a Data Scientist",
    "a Software Developer",
    "a Problem Solver",
    "an AI Researcher",
    "Ambikesh Srivastava",
];
let i = 0,
    j = 0,
    currentWord = "",
    isDeleting = false;

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
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-70px";
    }
    prevScrollPos = currentScrollPos;
};

// Animated Doodle Background
const canvas = document.getElementById("doodle-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const doodles = [];
for (let i = 0; i < 50; i++) {
    doodles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
    });
}

function drawDoodles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    doodles.forEach((doodle) => {
        ctx.beginPath();
        ctx.arc(doodle.x, doodle.y, doodle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fd1d1d";
        ctx.fill();

        doodle.x += doodle.dx;
        doodle.y += doodle.dy;

        if (doodle.x < 0 || doodle.x > canvas.width) doodle.dx *= -1;
        if (doodle.y < 0 || doodle.y > canvas.height) doodle.dy *= -1;
    });
    requestAnimationFrame(drawDoodles);
}
drawDoodles();

// Terminal Typing Effect
const terminalOutput = document.getElementById("terminal-output");
const terminalLines = [
    "Initializing AI modules...",
    "Loading Neural Networks... ✅",
    "Connecting to GitHub Repos... ✅",
    "Fetching Latest Projects... ✅",
    "Compiling Web Interface... ✅",
    "> npm start"
];

let lineIndex = 0;

function addTerminalLine() {
    if (lineIndex < terminalLines.length) {
        const p = document.createElement("p");
        p.textContent = terminalLines[lineIndex++];
        terminalOutput.appendChild(p);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        setTimeout(addTerminalLine, 1500);
    }
}

// Start Terminal Simulation
setTimeout(addTerminalLine, 1000);
