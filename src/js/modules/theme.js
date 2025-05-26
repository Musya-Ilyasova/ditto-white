const theme = () => {
  const darkBtn = document.querySelector('.btn-theme__dark');
  const lightBtn = document.querySelector('.btn-theme__light');
  // const autoBtn = document.querySelector('.btn-theme__icon');

  // Применить тему
  function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');

    if (theme === 'auto') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.body.classList.add(systemTheme);
    } else {
      document.body.classList.add(theme);
    }
  }

  // Загрузка темы при старте
  const savedTheme = localStorage.getItem('theme') || 'auto';
  applyTheme(savedTheme);

  // Установка обработчиков
  darkBtn.addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
    applyTheme('dark');
  });

  lightBtn.addEventListener('click', () => {
    localStorage.setItem('theme', 'light');
    applyTheme('light');
  });

  // autoBtn.addEventListener('click', () => {
  //   localStorage.setItem('theme', 'auto');
  //   applyTheme('auto');
  // });

}

export default theme;
