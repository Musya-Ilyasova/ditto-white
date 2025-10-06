const faqAccordion = () => {
  const items = document.querySelectorAll(".faq-list__item");

  if (!items.length) return;

  items.forEach((item) => {
    const header = item.querySelector(".faq-list__header");

    header.addEventListener("click", () => {
      // Если нужен режим аккордеона (закрывать остальные) — раскомментируй:
      // items.forEach(i => i !== item && i.classList.remove("open"));

      item.classList.toggle("open");
    });
  });
};

export default faqAccordion;
