// En tu archivo script.js

// Obtén una referencia a los elementos del carrusel
const skillsContainer = document.querySelector('.skills');
const skills = document.querySelectorAll('.skill');

// Configura el índice inicial
let currentIndex = 0;

// Función para mostrar la habilidad actual
function showCurrentSkill() {
    skills.forEach((skill, index) => {
        skill.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Función para avanzar al siguiente
function nextSkill() {
    currentIndex = (currentIndex + 1) % skills.length;
    showCurrentSkill();
}

// Función para retroceder al anterior
function prevSkill() {
    currentIndex = (currentIndex - 1 + skills.length) % skills.length;
    showCurrentSkill();
}

// Agrega eventos a los botones (debes crear los botones en tu HTML)
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

nextButton.addEventListener('click', nextSkill);
prevButton.addEventListener('click', prevSkill);

// Mostrar la habilidad inicial
showCurrentSkill();
