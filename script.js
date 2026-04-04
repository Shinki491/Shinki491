const btn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

btn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btn.textContent = next === 'dark' ? '☀️' : '🌙';
});