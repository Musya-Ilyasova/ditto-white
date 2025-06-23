const scrollAnimations = () => {
  const isMobile = window.innerWidth <= 767;
  if (!isMobile) return;

  const targets = document.querySelectorAll('.omnichain, .sign, .conditional, .module, .smart, .security, .tech');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 1, // можно подрегулировать, насколько элемент должен войти
  });

  targets.forEach(el => observer.observe(el));
}

export default scrollAnimations;
