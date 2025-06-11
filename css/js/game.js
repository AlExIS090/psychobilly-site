const quizData = [
  {
    question: {
      uk: "Який інструмент є невід'ємною частиною сайкобіллі?",
      en: "Which instrument is essential to psychobilly?"
    },
    answers: [
      { uk: "Електрогітара", en: "Electric Guitar", correct: false },
      { uk: "Контрабас",       en: "Upright Bass",   correct: true  },
      { uk: "Саксофон",        en: "Saxophone",      correct: false },
      { uk: "Синтезатор",      en: "Synthesizer",    correct: false }
    ]
  },
  {
    question: {
      uk: "Який темп зазвичай у сайкобіллі?",
      en: "What tempo is typical in psychobilly?"
    },
    answers: [
      { uk: "Повільний",    en: "Slow",      correct: false },
      { uk: "Середній",     en: "Medium",    correct: false },
      { uk: "Швидкий",      en: "Fast",      correct: true  },
      { uk: "Нерівний",     en: "Irregular", correct: false }
    ]
  },
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl  = document.getElementById('answers');
const nextBtn    = document.getElementById('nextQuestionBtn');
const resultEl   = document.getElementById('quizResult');

function loadQuiz() {
  answersEl.innerHTML = '';
  resultEl.textContent = '';

  const data = quizData[currentQuiz];
  const lang = document.getElementById('langSelect').value;

  questionEl.textContent = data.question[lang];
  data.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.textContent = ans[lang];
    btn.addEventListener('click', () => {
      if (ans.correct) score++;
      Array.from(answersEl.children).forEach(b => b.disabled = true);
      resultEl.textContent = ans.correct
        ? (lang==='en' ? 'Correct!' : 'Правильно!')
        : (lang==='en' ? 'Wrong!'   : 'Неправильно!');
    });
    answersEl.appendChild(btn);
  });
}
nextBtn.addEventListener('click', () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    const lang = document.getElementById('langSelect').value;
    const msg = lang==='en'
      ? `Your score: ${score}/${quizData.length}`
      : `Ваш результат: ${score}/${quizData.length}`;
    questionEl.textContent = '';
    answersEl.innerHTML = '';
    resultEl.textContent = msg;
    nextBtn.disabled = true;
  }
});

document.getElementById('langSelect').addEventListener('change', loadQuiz);

loadQuiz();
