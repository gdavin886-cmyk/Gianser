const body = document.body;
const themeToggle = document.querySelector('#themeToggle');
const dialog = document.querySelector('#customizeDialog');
const toast = document.querySelector('#toast');

function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2800);
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const dark = body.classList.contains('dark');
  themeToggle.textContent = dark ? '☀' : '☾';
  localStorage.setItem('gianser-theme', dark ? 'dark' : 'light');
});

if (localStorage.getItem('gianser-theme') === 'dark') themeToggle.click();

document.querySelector('#searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const query = document.querySelector('#searchInput').value.trim();
  if (!query) {
    notify('Enter a search or web address to begin.');
    return;
  }

  const hasProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(query);
  const looksLikeAddress = /^[^\s]+\.[^\s]+$/.test(query);
  const destination = hasProtocol
    ? query
    : looksLikeAddress
      ? `https://${query}`
      : `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.location.assign(destination);
});

document.querySelectorAll('[data-query]').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('#searchInput').value = button.dataset.query;
  document.querySelector('#searchInput').focus();
}));

document.querySelector('#customizeButton').addEventListener('click', () => dialog.showModal());
document.querySelector('.close').addEventListener('click', () => dialog.close());
document.querySelectorAll('.palette button').forEach((button) => button.addEventListener('click', () => {
  document.documentElement.style.setProperty('--brown', button.dataset.color);
  localStorage.setItem('gianser-color', button.dataset.color);
  notify('Your Gianser color has been updated.');
  dialog.close();
}));
document.querySelector('#downloadAction').addEventListener('click', () => notify('Your download space is ready.'));

const savedColor = localStorage.getItem('gianser-color');
if (savedColor) document.documentElement.style.setProperty('--brown', savedColor);
