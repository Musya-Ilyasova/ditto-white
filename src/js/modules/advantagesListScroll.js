const advantagesListScroll = () => {
  const listItems = document.querySelectorAll(".advantages-list__item");
  const progressContainer = document.querySelector(".advantages-progress");

  if (!listItems.length || !progressContainer) return;

  // Создаем прогресс-точки
  listItems.forEach((_, index) => {
    const dot = document.createElement("li");
    dot.dataset.index = index;
    progressContainer.appendChild(dot);
  });

  const progressDots = document.querySelectorAll(".advantages-progress li");

  function setActive(index) {
    listItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
    progressDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Ховер по элементам списка
  listItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => setActive(index));
  });

  // Клик по прогрессбару
  progressDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      listItems[index].scrollIntoView({ behavior: "smooth", block: "center" });
      setActive(index);
    });
  });

  // Делаем первый элемент активным по умолчанию
  setActive(0);
};

export default advantagesListScroll;
