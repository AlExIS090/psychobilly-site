document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input[type="text"]');
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();

    document.querySelectorAll('.festival-card').forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = title.includes(query) ? '' : 'none';
    });

    document.querySelectorAll('.band-card').forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(query) ? '' : 'none';
    });
  });
});