const form = document.getElementById('calcForm');
const resultP = document.getElementById('calcResult');

form.addEventListener('submit', e => {
  e.preventDefault();
  const ticket = parseFloat(document.getElementById('ticketPrice').value)   || 0;
  const accom  = parseFloat(document.getElementById('accomCost').value)     || 0;
  const ins    = parseFloat(document.getElementById('insuranceCost').value) || 0;
  const total  = ticket + accom + ins;
  resultP.textContent = `Total cost: ${total.toFixed(2)}`;
});