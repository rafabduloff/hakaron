import './style.css';

// Данные о планетах
const planets = [
  {
    name: "Меркурий",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
    properties: "Самая маленькая планета, ближайшая к Солнцу",
    description: "Меркурий - это безвоздушное, каменистое тело, покрытое кратерами."
  },
  {
    name: "Венера",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    properties: "Вторая планета от Солнца, схожа по размеру с Землей",
    description: "Венера имеет плотную атмосферу, состоящую в основном из углекислого газа."
  },
  {
    name: "Земля",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/280px-The_Earth_seen_from_Apollo_17.jpg",
    properties: "Третья планета от Солнца, единственная известная планета с жизнью",
    description: "Земля - наш дом, с разнообразными экосистемами и богатой биосферой."
  },
  {
    name: "Марс",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg",
    properties: "Четвертая планета от Солнца, известная как 'Красная планета'",
    description: "Марс имеет тонкую атмосферу и характеризуется наличием железа в почве."
  },
  {
    name: "Юпитер",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/280px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    properties: "Крупнейшая планета Солнечной системы",
    description: "Юпитер - газовый гигант с множеством спутников и знаменитым Большим Красным Пятном."
  },
  {
    name: "Сатурн",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg",
    properties: "Шестая планета от Солнца, известная своими кольцами",
    description: "Сатурн - газовый гигант с впечатляющей системой колец из льда и камней."
  },
  {
    name: "Уран",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg",
    properties: "Седьмая планета от Солнца, ледяной гигант",
    description: "Уран имеет уникальный наклон оси, из-за чего его полюса обращены к Солнцу."
  },
  {
    name: "Нептун",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/280px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    properties: "Восьмая и самая дальняя планета от Солнца",
    description: "Нептун - ледяной гигант с сильными ветрами и темными штормами."
  }
];

// Данные о космических миссиях
const missions = [
  { year: 1961, name: "Восток-1", description: "Первый полет человека в космос (Юрий Гагарин)" },
  { year: 1969, name: "Аполлон-11", description: "Первая высадка человека на Луну (Нил Армстронг и Базз Олдрин)" },
  { year: 1990, name: "Хаббл", description: "Запуск космического телескопа Хаббл" },
  { year: 1998, name: "МКС", description: "Начало сборки Международной космической станции" },
  { year: 2012, name: "Кьюриосити", description: "Марсоход Кьюриосити приземляется на Марс" },
  { year: 2015, name: "New Horizons", description: "Зонд New Horizons достигает Плутона" },
  { year: 2020, name: "Perseverance", description: "Марсоход Perseverance приземляется на Марс" }
];

// Данные для галереи
const galleryImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
];

// Данные для фактов о космосе
const spaceFacts = [
  { title: "Черные дыры", content: "Черные дыры настолько плотные, что даже свет не может избежать их гравитации." },
  { title: "Размер Вселенной", content: "Наблюдаемая Вселенная имеет диаметр около 93 миллиардов световых лет." },
  { title: "Звезды в Млечном Пути", content: "В нашей галактике Млечный Путь около 100-400 миллиардов звезд." },
  { title: "Температура на Венере", content: "Средняя температура поверхности Венеры составляет около 462°C." }
];

// Данные для квиза
const quizQuestions = [
  {
    question: "Какая планета известна как 'Красная планета'?",
    options: ["Венера", "Марс", "Юпитер", "Сатурн"],
    correctAnswer: 1
  },
  {
    question: "Кто был первым человеком, ступившим на Луну?",
    options: ["Юрий Гагарин", "Нил Армстронг", "Базз Олдрин", "Алан Шепард"],
    correctAnswer: 1
  },
  {
    question: "Какая планета имеет самое большое количество известных спутников?",
    options: ["Юпитер", "Сатурн", "Уран", "Нептун"],
    correctAnswer: 0
  },
  {
    question: "Какой космический телескоп был запущен в 1990 году?",
    options: ["Кеплер", "Хаббл", "Джеймс Уэбб", "Спитцер"],
    correctAnswer: 1
  },
  {
    question: "Какая планета вращается вокруг своей оси в противоположном направлении по сравнению с большинством других планет?",
    options: ["Меркурий", "Венера", "Уран", "Нептун"],
    correctAnswer: 1
  }
];

// Функция для создания карточек планет
function createPlanetCards() {
  const sliderTrack = document.querySelector('.slider-track');
  planets.forEach((planet, index) => {
    const planetCard = document.createElement('div');
    planetCard.className = 'planet-card';
    planetCard.innerHTML = `
      <div class="planet-image">
        <img src="${planet.image}" alt="${planet.name}">
      </div>
      <div class="planet-info">
        <h3>${planet.name}</h3>
        <div class="planet-details">
          <div class="planet-properties">
            <h4>Свойства:</h4>
            <p>${planet.properties}</p>
          </div>
          <div class="planet-description">
            <h4>Описание:</h4>
            <p>${planet.description}</p>
          </div>
        </div>
      </div>
    `;
    sliderTrack.appendChild(planetCard);
  });
}

// Функция для создания временной шкалы миссий
function createMissionTimeline() {
  const missionTimeline = document.querySelector('.mission-timeline');
  missions.forEach((mission, index) => {
    const missionElement = document.createElement('div');
    missionElement.className = `mission ${index % 2 === 0 ? 'left' : 'right'}`;
    missionElement.innerHTML = `
      <div class="mission-content">
        <div class="mission-date">${mission.year}</div>
        <h3>${mission.name}</h3>
        <p>${mission.description}</p>
      </div>
    `;
    missionTimeline.appendChild(missionElement);
  });
}

// Функция для создания галереи
function createGallery() {
  const galleryTrack = document.querySelector('.gallery-track');
  galleryImages.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
      <img src="${image}" alt="Космическое изображение ${index + 1}">
    `;
    galleryTrack.appendChild(galleryItem);
  });
}

// Функция для создания карточек с фактами
function createFactCards() {
  const factContainer = document.querySelector('.fact-container');
  spaceFacts.forEach(fact => {
    const factCard = document.createElement('div');
    factCard.className = 'fact-card';
    factCard.innerHTML = `
      <h3>${fact.title}</h3>
      <p>${fact.content}</p>
    `;
    factContainer.appendChild(factCard);
  });
}

// Функция для создания квиза
function createQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizQuestions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.className = 'quiz-question';
    questionElement.style.display = index === 0 ? 'block' : 'none';
    questionElement.innerHTML = `
      <h3>Вопрос ${index + 1}</h3>
      <p>${question.question}</p>
      <div class="quiz-options">
        ${question.options.map((option, optionIndex) => `
          <label class="quiz-option">
            <input type="radio" name="question${index}" value="${optionIndex}">
            ${option}
          </label>
        `).join('')}
      </div>
    `;
    quizContainer.appendChild(questionElement);
  });
}

let currentQuestion = 0;

// Функция для показа следующего вопроса
function showNextQuestion() {
  const questions = document.querySelectorAll('.quiz-question');
  if (currentQuestion < questions.length - 1) {
    questions[currentQuestion].style.display = 'none';
    currentQuestion++;
    questions[currentQuestion].style.display = 'block';
  }
  if (currentQuestion === questions.length - 1) {
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('submit-quiz').style.display = 'block';
  }
}

// Функция для проверки ответов квиза
function checkQuiz() {
  let score = 0;
  quizQuestions.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && parseInt(selectedOption.value) === question.correctAnswer) {
      score++;
    }
  });
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <h3>Ваш результат: ${score} из ${quizQuestions.length}</h3>
    <p>Спасибо за участие в квизе!</p>
  `;
  document.getElementById('submit-quiz').style.display = 'none';
}

// Функция для перемещения слайдера
function moveSlider(sliderTrack, direction) {
  const items = sliderTrack.children;
  const itemWidth = items[0].offsetWidth;
  const moveAmount = direction === 'next' ? -itemWidth : itemWidth;
  
  // Клонируем первый/последний элемент
  const itemToMove = direction === 'next' ? items[0] : items[items.length - 1];
  const clone = itemToMove.cloneNode(true);
  
  // Добавляем/вставляем клон
  if (direction === 'next') {
    sliderTrack.appendChild(clone);
  } else {
    sliderTrack.prepend(clone);
    sliderTrack.style.transform = `translateX(-${itemWidth}px)`;
  }
  
  // Анимируем трек
  requestAnimationFrame(() => {
    sliderTrack.style.transition = 'transform 0.5s ease';
    sliderTrack.style.transform = `translateX(${direction === 'next' ? moveAmount : 0}px)`;
  });
  
  // После анимации удаляем оригинальный элемент и сбрасываем позицию
  setTimeout(() => {
    sliderTrack.style.transition = 'none';
    if (direction === 'next') {
      sliderTrack.removeChild(items[0]);
      sliderTrack.style.transform = 'translateX(0)';
    } else {
      sliderTrack.removeChild(items[items.length - 1]);
      sliderTrack.style.transform = 'translateX(0)';
    }
  }, 500);
}

// Функция для плавной прокрутки
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop - 70,
    behavior: 'smooth'
  });
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', () => {
  createPlanetCards();
  createMissionTimeline();
  createGallery();
  createFactCards();
  createQuiz();

  // Функциональность бургер-меню
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Плавная прокрутка для навигационных ссылок
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      smoothScroll(target);
      if (navLinks.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });

  // Функциональность слайдера планет
  const planetSliderTrack = document.querySelector('.planets .slider-track');
  document.querySelector('.planets .slider-arrow.prev').addEventListener('click', () => moveSlider(planetSliderTrack, 'prev'));
  document.querySelector('.planets .slider-arrow.next').addEventListener('click', () => moveSlider(planetSliderTrack, 'next'));

  // Функциональность слайдера галереи
  const gallerySliderTrack = document.querySelector('.gallery-track');
  document.querySelector('.gallery-arrow.prev').addEventListener('click', () => moveSlider(gallerySliderTrack, 'prev'));
  document.querySelector('.gallery-arrow.next').addEventListener('click', () => moveSlider(gallerySliderTrack, 'next'));

  // Навигация по квизу
  document.getElementById('next-question').addEventListener('click', showNextQuestion);
  document.getElementById('submit-quiz').addEventListener('click', checkQuiz);

  // Отправка формы обратной связи
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('popup').style.display = 'flex';
    e.target.reset();
  });

  // Закрытие всплывающего окна
  document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
  });

  // Эффект параллакса для секции hero
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.7}px`;
  });

  // Изменение цвета навбара при прокрутке
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
    } else {
      header.style.backgroundColor = 'rgba(10, 25, 47, 0.7)';
    }
  });

  // Анимация элементов при прокрутке
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.planet-card, .mission, .gallery-item, .fact-card, .quiz-question');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Начальная проверка при загрузке страницы

  // Адаптивность слайдеров
  function updateSliderView() {
    const planetCards = document.querySelectorAll('.planet-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (window.innerWidth <= 768) {
      planetCards.forEach(card => card.style.flex = '0 0 100%');
      galleryItems.forEach(item => item.style.flex = '0 0 calc(100% - 40px)');
    } else if (window.innerWidth <= 1024) {
      planetCards.forEach(card => card.style.flex = '0 0 calc(50% - 30px)');
      galleryItems.forEach(item => item.style.flex = '0 0 calc(50% - 60px)');
    } else {
      planetCards.forEach(card => card.style.flex = '0 0 300px');
      galleryItems.forEach(item => item.style.flex = '0 0 calc(33.333% - 80px)');
    }
  }

  window.addEventListener('resize', updateSliderView);
  updateSliderView(); // Начальная настройка при загрузке страницы
});