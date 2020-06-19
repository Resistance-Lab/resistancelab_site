const toggle = document.getElementById('js-toggle')
const nav = document.getElementById('js-nav')

// hamburger.toggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
toggle.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.toggle('expanded');
});
