const layersSvg = () => {
  const listItems = document.querySelectorAll('.network-list__item');
  const svg = document.querySelector('.layers');

  const stepMap = {
    0: ['.step-1'],
    1: ['.step-2'],
    2: ['.step-3'],
  };

  listItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      const steps = stepMap[index];
      if (!steps) return;

      steps.forEach(selector => {
        svg.querySelectorAll(selector).forEach(el => el.classList.add('active'));
      });
    });

    item.addEventListener('mouseleave', () => {
      const steps = stepMap[index];
      if (!steps) return;

      steps.forEach(selector => {
        svg.querySelectorAll(selector).forEach(el => el.classList.remove('active'));
      });
    });
  });
}

export default layersSvg;
