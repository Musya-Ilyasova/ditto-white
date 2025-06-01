import theme from "./modules/theme";
import initTabs from "./modules/tabs"
import addCopy from "./modules/copy";
import { mobMenu, subMenu } from "./modules/menu";
import heroSvg from "./modules/heroSvg";

document.addEventListener("DOMContentLoaded",  () => {
  theme();
  initTabs();
  addCopy();
  mobMenu();
  subMenu();
  heroSvg();
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


});

