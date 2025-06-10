(function() {
  const sel = document.getElementById('langSelect');
  if (!sel) return;

  const applyLang = lang => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-uk]').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  };

  const saved = localStorage.getItem('site-lang') || 'uk';
  sel.value = saved;
  applyLang(saved);

  sel.addEventListener('change', () => {
    localStorage.setItem('site-lang', sel.value);
    applyLang(sel.value);
  });
})();

