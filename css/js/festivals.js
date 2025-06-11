document.getElementById('langSelect').addEventListener('change', () => {
  document.querySelectorAll('[data-uk]').forEach(el => {
    el.textContent = el.getAttribute(
      document.getElementById('langSelect').value === 'en' ? 'data-en' : 'data-uk'
    );
  });
});

document.getElementById('festSearch').addEventListener('keypress', function(e) {
  if (e.key !== 'Enter') return;
  e.preventDefault();
  const q = this.value.toLowerCase();
  document.querySelectorAll('.festival-card').forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(q) ? '' : 'none';
  });
});

document.getElementById('calcTripBtn').addEventListener('click', () => {
  const ticket = parseFloat(document.getElementById('ticket').value) || 0;
  const accommodation = parseFloat(document.getElementById('accommodation').value) || 0;
  const insurance = parseFloat(document.getElementById('insurance').value) || 0;
  const days = parseInt(document.getElementById('days').value) || 0;
  const total = ticket + (accommodation * days) + insurance;
  document.getElementById('totalCost').textContent =
    `Загальна вартість поїздки: ${total.toFixed(2)} грн`;
});

const psychoQuotes = [
  "«Psychobilly isn’t just music — it’s a way of life with a twist of madness.»",
  "«When the bass slaps like a zombie’s heart, you know it’s psychobilly.»",
  "«One foot in punk, the other in hell — that’s the psychobilly walk.»",
  "«Grease in the hair, tremor in the soul, psychobilly in the blood.»",
  "«Psychobilly is rockabilly gone wild after midnight.»",
  "«Keep it loud, keep it freaky — psychobilly never dies.»",
  "«We don’t do pretty. We do psychobilly.»",
  "«Psychobilly: for those who wear leather to the grave.»"
];
const quoteDisplay = document.getElementById('psychoQuote');
const quoteBtn = document.getElementById('newPsychoQuoteBtn');
quoteBtn.addEventListener('click', () => {
  quoteDisplay.textContent = psychoQuotes[
    Math.floor(Math.random() * psychoQuotes.length)
  ];
});
document.addEventListener('DOMContentLoaded', () => quoteBtn.click());