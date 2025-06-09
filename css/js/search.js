const searchInput = document.getElementById('searchInput');
const bandItems = document.querySelectorAll('.band-item');

searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();
  bandItems.forEach(function (item) {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? '' : 'none';
  });
});