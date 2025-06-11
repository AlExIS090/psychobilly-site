function updateClock() {
  const now = new Date();
  const pad = n => n < 10 ? '0' + n : n;
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const date = now.toLocaleDateString('uk-UA', {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
  });
  document.getElementById('clock').textContent = `${date} • ${time}`;
}
setInterval(updateClock, 1000);
updateClock();
