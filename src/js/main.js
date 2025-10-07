import loadCss from "./modules/loadCss";
import theme from "./modules/theme";
import initTabs from "./modules/tabs"
import addCopy from "./modules/copy";
import { mobMenu, subMenu } from "./modules/menu";
import heroSvg from "./modules/heroSvg";
import layersSvg from "./modules/layersSvg";
import scrollAnimations from "./modules/scrollAnimations";
import updateExecutedNumbers from "./modules/updateExecutedNumbers";
import advantagesListScroll from "./modules/advantagesListScroll";
import featuresSlider from "./modules/featuresSlider";
import faqAccordion from "./modules/faqAccordion";

if(document.querySelector('body')) {
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
  mobMenu();
  if (window.innerWidth <= 979) {
    subMenu();
  };
  if(document.querySelector('body').classList.contains('index')) {
    updateExecutedNumbers();
    initTabs();
    addCopy();
    scrollAnimations();
    heroSvg();
    layersSvg();
  };
  if(document.querySelector('body').classList.contains('subPage')) {
    advantagesListScroll();
    featuresSlider();
    faqAccordion();
  }
});

