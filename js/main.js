// Language toggle and dynamic content
(function(){
  const langArBtn = document.getElementById('lang-ar');
  const langEnBtn = document.getElementById('lang-en');

  function setLang(lang){
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langArBtn.classList.toggle('active', lang==='ar');
    langEnBtn.classList.toggle('active', lang==='en');

    // Swap text from data attributes
    document.querySelectorAll('[data-ar]').forEach(el => {
      const text = el.getAttribute(lang === 'ar' ? 'data-ar' : 'data-en');
      if(text) el.textContent = text;
    });

    // Toggle FAQ languages visibility
    document.getElementById('faq-ar').style.display = (lang==='ar') ? 'block' : 'none';
    document.getElementById('faq-en').style.display = (lang==='en') ? 'block' : 'none';
  }

  langArBtn.addEventListener('click', ()=> setLang('ar'));
  langEnBtn.addEventListener('click', ()=> setLang('en'));

  // Init
  setLang('ar');
})();
