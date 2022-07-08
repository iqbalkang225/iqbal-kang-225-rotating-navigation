const open = document.querySelector('.open');
const close = document.querySelector('.close');
const container = document.querySelector('.container');
const headerBtns = document.querySelector('.header-btns');
const navItems = document.querySelectorAll('.nav-item');

const updateDOM = function(action) {
  container.classList[action]('rotation');
  headerBtns.classList[action]('rotation');
  navItems.forEach((navItem) => {
    navItem.classList[action]('show-item');
  });
}

open.addEventListener('click', () => {
  updateDOM('add');
});

close.addEventListener('click', () => {
  updateDOM('remove');
});
