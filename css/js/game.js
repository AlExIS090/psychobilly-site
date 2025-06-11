document.addEventListener('DOMContentLoaded', () => {
  const quizData = [
    {
      question: {
        uk: "Який інструмент є невід'ємною частиною сайкобіллі?",
        en: "Which instrument is essential to psychobilly?"
      },
      answers: [
        { uk: "Електрогітара",   en: "Electric Guitar",   correct: false },
        { uk: "Контрабас",        en: "Upright Bass",      correct: true  },
        { uk: "Саксофон",         en: "Saxophone",         correct: false },
        { uk: "Синтезатор",       en: "Synthesizer",       correct: false }
      ]
    },
    {
      question: {
        uk: "Який темп зазвичай у сайкобіллі?",
        en: "What tempo is typical in psychobilly?"
      },
      answers: [
        { uk: "Повільний",   en: "Slow",       correct: false },
        { uk: "Середній",    en: "Medium",     correct: false },
        { uk: "Швидкий",     en: "Fast",       correct: true  },
        { uk: "Нерівний",    en: "Irregular",  correct: false }
      ]
    },
    {
      question: {
        uk: "Яке слово найкраще описує стиль сайкобіллі?",
        en: "What word best describes the psychobilly style?"
      },
      answers: [
        { uk: "Романтичний", en: "Romantic",    correct: false },
        { uk: "Дикі",       en: "Wild",        correct: true  },
        { uk: "Меланхолійний", en: "Melancholic", correct: false },
        { uk: "Класичний",  en: "Classical",   correct: false }
      ]
    },
    {
      question: {
        uk: "Звідки походить термін «psychobilly»?",
        en: "Where does the term 'psychobilly' originate?"
      },
      answers: [
        { uk: "Пісня гурту The Cramps",      en: "A song by The Cramps",            correct: true  },
        { uk: "Назва радіошоу",              en: "Name of a radio show",            correct: false },
        { uk: "Фільм жахів 1950-х",          en: "A 1950s horror movie",            correct: false },
        { uk: "Книга про рок-музику",        en: "A book about rock music",         correct: false }
      ]
    }
  ];

  let currentQuiz = 0;
  let score = 0;

  const questionEl = document.getElementById('question');
  const answersEl  = document.getElementById('answers');
  const nextBtn    = document.getElementById('nextQuestionBtn');
  const resultEl   = document.getElementById('quizResult');
  const langSelect = document.getElementById('langSelect');

  if (!questionEl || !answersEl || !nextBtn || !resultEl || !langSelect) {
    console.error('game.js: не знайдено потрібні елементи вікторини');
    return;
  }

  function loadQuiz() {
    answersEl.innerHTML = '';
    resultEl.textContent = '';

    const data = quizData[currentQuiz];
    const lang = langSelect.value;

    questionEl.textContent = data.question[lang];

    data.answers.forEach(ans => {
      const btn = document.createElement('button');
      btn.textContent = ans[lang];
      btn.addEventListener('click', () => {
        Array.from(answersEl.children).forEach(b => b.disabled = true);

        if (ans.correct) {
          score++;
          resultEl.textContent = lang === 'en' ? 'Correct!' : 'Правильно!';
        } else {
          resultEl.textContent = lang === 'en' ? 'Wrong!' : 'Неправильно!';
        }
      });
      answersEl.appendChild(btn);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      const lang = langSelect.value;
      questionEl.textContent = '';
      answersEl.innerHTML = '';
      nextBtn.disabled = true;
      resultEl.textContent = lang === 'en'
        ? `Your score: ${score}/${quizData.length}`
        : `Ваш результат: ${score}/${quizData.length}`;
    }
  });

  langSelect.addEventListener('change', () => {
    if (currentQuiz < quizData.length) {
      loadQuiz();
    }
  });

  loadQuiz();
});