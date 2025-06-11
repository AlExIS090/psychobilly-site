const quotes = [
 "Psychobilly isn’t just music — it’s a way of life with a twist of madness.",
  "When the upright bass slaps, your heart starts beating the psychobilly rhythm.",
  "One foot in punk, the other in rockabilly — that’s the psychobilly walk.",
  "Leather jackets, skull tattoos and devilish riffs — welcome to psychobilly.",
  "We don’t do pretty. We do psychobilly.",
  "Grease in the hair, tremor in the soul, psychobilly in the blood.",
  "Psychobilly is rockabilly gone wild after midnight.",
  "Keep it loud, keep it freaky — psychobilly never dies.",
  "Life’s too short for slow tempos — crank up the psychobilly!",
  "In psychobilly we trust — and in chaos we thrive."
];

const btn     = document.getElementById('newQuoteBtn');
const display = document.getElementById('quoteDisplay');

if (!btn || !display) {
  console.error('quotes.js: елемент newQuoteBtn або quoteDisplay не знайдено');
}

btn.addEventListener('click', () => {
  const idx = Math.floor(Math.random() * quotes.length);
  display.textContent = quotes[idx];
});

if (btn) btn.click();