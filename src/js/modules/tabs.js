const initTabs = () => {
  const tabItems = document.querySelectorAll('.automation__tab-item');
  const tabPanels = document.querySelectorAll('.tab-panel');

  const mobTabs = document.querySelectorAll('.tab-panel__subtitle');

  const mobPanels = document.querySelectorAll('.tab-panel__mob');


  tabItems.forEach(item => {
    item.addEventListener('click', () => {

      tabItems.forEach(i => i.classList.remove('active'));

      item.classList.add('active');


      tabPanels.forEach(panel => {
        panel.classList.remove('active');
        panel.style.height=0;
      });


      const tabId = item.getAttribute('data-tab');
      const activePanel = document.querySelector(`.tab-panel[data-tab="${tabId}"]`);
      activePanel.classList.add('active');

      activePanel.style.height = `${activePanel.scrollHeight}px`;
    });
  });

  // Устанавливаем начальную высоту активной панели
  const initialActivePanel = document.querySelector('.tab-panel.active');
  if (initialActivePanel) {
    initialActivePanel.style.height = `${initialActivePanel.scrollHeight}px`;
  }



  mobTabs.forEach(item => {
    item.addEventListener('click', () => {
      mobTabs.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      mobPanels.forEach(panel => {
        panel.classList.remove('active');
      });
      item.closest('.tab-panel__right').querySelector('.tab-panel__mob').classList.add('active');
    });
  });

}

export default initTabs;
