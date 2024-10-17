// Planet slider functionality
const planetSlider = document.querySelector('.planet-slider');
const planetTrack = planetSlider.querySelector('.slider-track');
const planetCards = planetTrack.querySelectorAll('.planet-card');
const prevButton = planetSlider.querySelector('.prev');
const nextButton = planetSlider.querySelector('.next');
let currentIndex = 0;

function showPlanet(index) {
    planetTrack.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + planetCards.length) % planetCards.length;
    showPlanet(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % planetCards.length;
    showPlanet(currentIndex);
});

// Gallery slider functionality
const gallerySlider = document.querySelector('.gallery-slider');
const galleryTrack = gallerySlider.querySelector('.gallery-track');
const galleryItems = galleryTrack.querySelectorAll('.gallery-item');
const galleryPrevButton = gallerySlider.querySelector('.prev');
const galleryNextButton = gallerySlider.querySelector('.next');
let currentGalleryIndex = 0;

function showGalleryItem(index) {
    galleryTrack.style.transform = `translateX(-${index * 100}%)`;
}

galleryPrevButton.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    showGalleryItem(currentGalleryIndex);
});

galleryNextButton.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    showGalleryItem(currentGalleryIndex);
});

// Quiz functionality
const quizContainer = document.getElementById('quiz-container');
const nextQuestionButton = document.getElementById('next-question');
const submitQuizButton = document.getElementById('submit-quiz');
let currentQuestion = 0;
const questions = quizContainer.querySelectorAll('.quiz-question');

const correctAnswers = [1, 1, 0]; // Индексы правильных ответов для каждого вопроса

function showQuestion(index) {
    questions.forEach((question, i) => {
        if (i === index) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });

    if (index === questions.length - 1) {
        nextQuestionButton.style.display = 'none';
        submitQuizButton.style.display = 'block';
    } else {
        nextQuestionButton.style.display = 'block';
        submitQuizButton.style.display = 'none';
    }
}

nextQuestionButton.addEventListener('click', () => {
    currentQuestion++;
    showQuestion(currentQuestion);
});

submitQuizButton.addEventListener('click', () => {
    console.log('Submit button clicked');
    let score = 0;
    questions.forEach((question, index) => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        if (selectedAnswer && parseInt(selectedAnswer.value) === correctAnswers[index]) {
            score++;
        }
    });

    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;

    alert(`Квиз завершен! Ваш результат: ${score} из ${totalQuestions} (${percentage.toFixed(2)}%)`);
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log('Form submitted:', { name, email, message });

    contactForm.reset();
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Mobile menu functionality
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Initialize all functionalities
document.addEventListener('DOMContentLoaded', () => {
    showPlanet(currentIndex);
    showGalleryItem(currentGalleryIndex);
    showQuestion(currentQuestion);
});
