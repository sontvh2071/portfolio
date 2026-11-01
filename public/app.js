const themeButton = document.querySelector('.theme-button');
function updateThemeLabel() {
  const dark = document.documentElement.dataset.theme !== 'light';
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  document.querySelector('meta[name="theme-color"]').content = dark ? '#212121' : '#fafaf7';
}
updateThemeLabel();
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('son-portfolio-theme', next); } catch {}
  updateThemeLabel();
});
document.querySelector('#year').textContent = new Date().getFullYear();
