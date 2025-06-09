document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input[type="text"]');
  if (!input) return;

  input.addEventListener('keypress', e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const q = input.value.toLowerCase();
    document.querySelectorAll('.festival-card, .band-card').forEach(card => {
      const txt = (card.querySelector('h2') || card.querySelector('h3')).textContent.toLowerCase();
      card.style.display = txt.includes(q) ? '' : 'none';
    });
  });
});
