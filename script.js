const CONTENT_OPEN = '<i class="icon-nav-menu-btn"></i>';
const CONTENT_CLOSE = '&#10006;';
const BTN_ID = 'nav-btn';
const MENU_ID = 'menu';
const BTN_IMG_ID = 'menu-btn-img';
const NAV_LINK_CLASS = 'nav__link';

const menu = document.getElementById(MENU_ID);
const btnImg = document.getElementById(BTN_IMG_ID);
const menuBtn = document.getElementById(BTN_ID);
const menuLinks = document.getElementsByClassName(NAV_LINK_CLASS);

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('toogle-menu--open');
  changeContent();
  menu.classList.toggle('nav__list--open');
});

function changeContent() {
  if (menuBtn.classList.contains('toogle-menu--open')) {
    menuBtn.innerHTML = CONTENT_CLOSE;
  } else {
    menuBtn.innerHTML = CONTENT_OPEN;
  }
}

function addMenuHandler(links) {
  if (!links.length) {
    return false;
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const elementId = e.target?.dataset?.href;
      if (!elementId) {
        return;
      }
      handleButtonClick(elementId);
    });
  });
}

function handleButtonClick(id) {
  [...document.getElementsByClassName('section--active')].forEach((item) => {
    item.classList.remove('section--active');
  });
  const section = document.getElementById(id);
  section?.classList.add('section--active');
  section?.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

addMenuHandler([...menuLinks]);
