const festivalDate = new Date("2025-08-22T18:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = festivalDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "Фестиваль вже розпочався!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = `
    <div>${days} дн</div>
    <div>${hours} год</div>
    <div>${minutes} хв</div>
    <div>${seconds} сек</div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();