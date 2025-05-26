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
      titles.forEach(i => {i.classList.remove('active')});
      lists.forEach(i => {i.classList.remove('show')});
      title.classList.add('active');
      title.closest('.menu-list__item').querySelector('.menu-submenu').classList.add('show');
    })
  })
}
