const addCopy = () => {
  const copyButtons = document.querySelectorAll('.code-block__copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const codeElement = button.closest('.code-block__wrapper').querySelector('.code-block__code');
      const codeText = codeElement.textContent;
      navigator.clipboard.writeText(codeText).then(() => {
        button.classList.add('copied');

        setTimeout(() => {
          button.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Ошибка при копировании:', err);
      });
    });
  });
}

export default addCopy;


