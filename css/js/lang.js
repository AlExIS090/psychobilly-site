(function(){
  const sel = document.getElementById('langSelect');
  const apply = lang => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-uk]').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  };
  const saved = localStorage.getItem('site-lang') || 'uk';
  sel.value = saved;
  apply(saved);

  sel.addEventListener('change', () => {
    localStorage.setItem('site-lang', sel.value);
    apply(sel.value);
  });
})();