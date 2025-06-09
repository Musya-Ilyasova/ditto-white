import loadCss from "./modules/loadCss";
import theme from "./modules/theme";
import initTabs from "./modules/tabs"
import addCopy from "./modules/copy";
import { mobMenu, subMenu } from "./modules/menu";
import heroSvg from "./modules/heroSvg";
import layersSvg from "./modules/layersSvg";
import scrollAnimations from "./modules/scrollAnimations";

if(document.querySelector('main').classList.contains('index')) {
  loadCss();
}

document.addEventListener("DOMContentLoaded",  () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  theme();
  initTabs();
  addCopy();
  mobMenu();
  scrollAnimations();
  if (window.innerWidth <= 979) {
    subMenu();
  };
  heroSvg();
  layersSvg();
});

