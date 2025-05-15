// Dark Mode Toggle - Default to Dark
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved light mode preference
if (localStorage.getItem('darkMode') === 'disabled') {
    body.classList.add('light-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; 
    // Default to dark mode
}

// Toggle dark/light mode on click
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Download CV
document.getElementById('cvButton').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('assets/CV_Ritesh.pdf', '_blank');
});

// Animation Background
const animationBg = document.getElementById('animationBg');
const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];
        
for (let i = 0; i < 50; i++) {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.width = '2px';
    element.style.height = Math.random() * 100 + 'px';
    element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.opacity = Math.random() * 0.5 + 0.1;
                
    // Animation
    const duration = Math.random() * 10 + 5;
    element.style.animation = `float ${duration}s infinite ease-in-out`;

    animationBg.appendChild(element);
}

// Add keyframes for animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(5deg);
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Animation
const typingElement = document.getElementById("typingText");
const phrases = ["Web Developer","Programmer", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentPhrase.substring(0, charIndex);
    } else {
        charIndex++;
        typingElement.textContent = currentPhrase.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

// skills bars
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.circle').forEach(circle => {
      const percent = circle.getAttribute('data-percentage');
      const progress = circle.querySelector('.progress');
      const offset = 283 - (283 * percent) / 100;
      progress.style.strokeDashoffset = offset;
    });
  });