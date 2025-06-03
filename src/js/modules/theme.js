const theme = () => {
  const darkBtn = document.querySelector('.btn-theme__dark');
  const lightBtn = document.querySelector('.btn-theme__light');
  const autoBtn = document.querySelector('.btn-theme__default');

  function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');
    darkBtn.classList.remove('active');
    lightBtn.classList.remove('active');
    autoBtn.classList.remove('active');

    if (theme === 'auto') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.body.classList.add(systemTheme);
      autoBtn.classList.add('active');
    } else if (theme === 'dark') {
      document.body.classList.add('dark');
      darkBtn.classList.add('active');
    } else {
      document.body.classList.add('light');
      lightBtn.classList.add('active');
    }
  }

  const savedTheme = localStorage.getItem('theme') || 'auto';
  applyTheme(savedTheme);

  if (savedTheme === 'auto') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      applyTheme('auto');
    });
  }

  darkBtn.addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
    applyTheme('dark');
  });

  lightBtn.addEventListener('click', () => {
    localStorage.setItem('theme', 'light');
    applyTheme('light');
  });

  autoBtn.addEventListener('click', () => {
    localStorage.setItem('theme', 'auto');
    applyTheme('auto');
  });
};

export default theme;
