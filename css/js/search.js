document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('header .search-bar input') || document.querySelector('input[type="text"]');
  if (!input) return;
  input.addEventListener('keypress', e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const q = input.value.toLowerCase();
    document.querySelectorAll('.festival-card').forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = title.includes(q) ? '' : 'none';
    });
    document.querySelectorAll('.band-card').forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(q) ? '' : 'none';
    });
  });
});