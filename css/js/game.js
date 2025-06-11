document.addEventListener('DOMContentLoaded', () => {
  const quizData = [
    {
      question: { uk: "Який інструмент є невід'ємною частиною сайкобіллі?", en: "Which instrument is essential to psychobilly?" },
      answers: [
        { uk: "Електрогітара", en: "Electric Guitar", correct: false },
        { uk: "Контрабас",      en: "Upright Bass",    correct: true  },
        { uk: "Саксофон",       en: "Saxophone",       correct: false },
        { uk: "Синтезатор",     en: "Synthesizer",     correct: false }
      ]
    },
    {
      question: { uk: "Який темп зазвичай у сайкобіллі?", en: "What tempo is typical in psychobilly?" },
      answers: [
        { uk: "Повільний", en: "Slow",    correct: false },
        { uk: "Середній",  en: "Medium",  correct: false },
        { uk: "Швидкий",   en: "Fast",    correct: true  },
        { uk: "Нерівний",  en: "Irregular", correct: false }
      ]
    },
    {
      question: { uk: "Яке слово найкраще описує стиль сайкобіллі?", en: "What word best describes the psychobilly style?" },
      answers: [
        { uk: "Романтичний", en: "Romantic",     correct: false },
        { uk: "Дикі",       en: "Wild",         correct: true  },
        { uk: "Меланхолійний", en: "Melancholic", correct: false },
        { uk: "Класичний",  en: "Classical",    correct: false }
      ]
    },
    {
      question: { uk: "Звідки походить термін «psychobilly»?", en: "Where does the term 'psychobilly' originate?" },
      answers: [
        { uk: "Пісня гурту The Cramps", en: "A song by The Cramps",    correct: true  },
        { uk: "Назва радіошоу",         en: "Name of a radio show",    correct: false },
        { uk: "Фільм жахів 1950-х",     en: "A 1950s horror movie",    correct: false },
        { uk: "Книга про рок-музику",   en: "A book about rock music", correct: false }
      ]
    }
  ];

  let currentQuiz = 0, score = 0;
  const qEl   = document.getElementById('question');
  const aEl   = document.getElementById('answers');
  const nBtn  = document.getElementById('nextQuestionBtn');
  const rEl   = document.getElementById('quizResult');
  const lang  = document.getElementById('langSelect');

  if (!qEl || !aEl || !nBtn || !rEl || !lang) {
    console.error('game.js: елементи не знайдено');
    return;
  }

  function loadQuiz() {
    aEl.innerHTML = '';
    rEl.textContent = '';
    const data = quizData[currentQuiz];
    const l = lang.value;
    qEl.textContent = data.question[l];
    data.answers.forEach(ans => {
      const btn = document.createElement('button');
      btn.textContent = ans[l];
      btn.addEventListener('click', () => {
        Array.from(aEl.children).forEach(b => b.disabled = true);
        rEl.textContent = ans.correct
          ? (l==='en' ? 'Correct!' : 'Правильно!')
          : (l==='en' ? 'Wrong!'   : 'Неправильно!');
        if (ans.correct) score++;
      });
      aEl.appendChild(btn);
    });
  }

  nBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      qEl.textContent = '';
      aEl.innerHTML = '';
      nBtn.disabled = true;
      rEl.textContent = (lang.value==='en'
        ? `Your score: ${score}/${quizData.length}`
        : `Ваш результат: ${score}/${quizData.length}`);
    }
  });

  lang.addEventListener('change', () => {
    if (currentQuiz < quizData.length) loadQuiz();
  });

  loadQuiz();
});