export const mobMenu = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu')

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('show');
    document.querySelector('body').classList.toggle('overflow');
  })
}

export const subMenu = () => {
  const titles = document.querySelectorAll('.menu-list__title');
  const lists = document.querySelectorAll('.menu-submenu');

  titles.forEach(title => {
    title.addEventListener('click', () => {
      const item = title.closest('.menu-list__item');
      const submenu = item.querySelector('.menu-submenu');
      const isActive = item.classList.contains('active');

      // Если уже активен — закрываем
      if (isActive) {
        item.classList.remove('active');
        submenu.classList.remove('show');
      } else {
        // Иначе закрываем все и открываем текущий
        titles.forEach(i => i.closest('.menu-list__item').classList.remove('active'));
        lists.forEach(i => i.classList.remove('show'));

        item.classList.add('active');
        submenu.classList.add('show');
      }
    });
  });
};
