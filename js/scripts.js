// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Typing Animation
const typedTextElement = document.getElementById('typed-text');
const facts = [
    'MScstudent @ TU Delft',
    'ML Engineer @ virtualworkforce.ai',
    'Traveling the world',
    'Always learning'
];
let factIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeFacts() {
    const currentFact = facts[factIndex];
    if (isDeleting) {
        typedTextElement.textContent = currentFact.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            factIndex = (factIndex + 1) % facts.length;
            setTimeout(typeFacts, 500);
        } else {
            setTimeout(typeFacts, typeSpeed / 2);
        }
    } else {
        typedTextElement.textContent = currentFact.substring(0, charIndex++);
        if (charIndex > currentFact.length) {
            isDeleting = true;
            setTimeout(typeFacts, 2000);
        } else {
            setTimeout(typeFacts, typeSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeFacts();
});
