const initTabs = () => {
  const tabItems = document.querySelectorAll('.automation__tab-item');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const mobTabs = document.querySelectorAll('.tab-panel__subtitle');
  const mobPanels = document.querySelectorAll('.tab-panel__mob');

  const mainCodeBlock = document.querySelector('.tab-panel[data-tab="tab1"] .code-block__inner');

  const replaceTabContent = (tabId) => {
    const sourcePanel = document.querySelector(`.tab-panel[data-tab="${tabId}"]`);
    if (!sourcePanel) return;

    // CODE
    const mainCodeBlock = document.querySelector('.code-block__inner[data-main]');
    const rawCode = sourcePanel.querySelector('.code-block__inner') || sourcePanel.querySelector('pre');
    if (mainCodeBlock && rawCode) {
      mainCodeBlock.innerHTML = rawCode.outerHTML;
    }

    // SUBTITLE
    const sourceSubtitle = sourcePanel.querySelector('.tab-panel__subtitle');
    const targetSubtitle = document.querySelector('[data-desktop-subtitle]');
    if (sourceSubtitle && targetSubtitle) {
      targetSubtitle.innerHTML = sourceSubtitle.innerHTML;
    }

    // TEXT
    const sourceText = sourcePanel.querySelector('.tab-panel__text');
    const targetText = document.querySelector('[data-desktop-text]');
    if (sourceText && targetText) {
      targetText.innerHTML = sourceText.innerHTML;
    }

    // IMAGE
    const sourceImg = sourcePanel.querySelector('.tab-panel__img');
    const targetImg = document.querySelector('[data-desktop-img]');
    if (sourceImg && targetImg) {
      const bg = getComputedStyle(sourceImg).backgroundImage;
      targetImg.style.backgroundImage = bg;
    }
  };



  tabItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');

      if (window.innerWidth >= 768) {
        // Десктоп: игнорируем повторный клик по активному табу
        const currentTab = document.querySelector('.automation__tab-item.active');
        if (currentTab === item) return;

        tabItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        replaceTabContent(tabId);
      } else {
        // Мобилка: поведение как было — показ/скрытие всей панели
        tabItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        tabPanels.forEach(panel => {
          panel.classList.remove('active');
          panel.style.height = 0;
        });

        const activePanel = document.querySelector(`.tab-panel[data-tab="${tabId}"]`);
        if (activePanel) {
          activePanel.classList.add('active');
          activePanel.style.height = `${activePanel.scrollHeight}px`;
        }
      }
    });
  });


  // Устанавливаем начальную высоту активной панели (моб)
  const initialActivePanel = document.querySelector('.tab-panel.active');
  if (initialActivePanel && window.innerWidth < 768) {
    initialActivePanel.style.height = `${initialActivePanel.scrollHeight}px`;
  }

  // Мобильные вложенные табы (раскрытие описания и картинки)
  mobTabs.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      mobTabs.forEach(i => i.classList.remove('active'));
      mobPanels.forEach(panel => panel.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
        item.closest('.tab-panel__right')?.querySelector('.tab-panel__mob')?.classList.add('active');
      }
    });
  });
  if (window.innerWidth >= 768) {
    replaceTabContent('tab1');
  }
};

export default initTabs;
