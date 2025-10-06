import Swiper from "swiper";
import { Navigation } from 'swiper/modules';

const featuresSlider = () => {
   const sliderEl = document.querySelector(".featuresSlider-swiper");

  if (!sliderEl) return;

  const swiper = new Swiper(sliderEl, {
    modules: [Navigation],
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.featuresSlider-btn_right',
      prevEl: '.featuresSlider-btn_left'
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        direction: 'vertical',
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        direction: 'horizontal',
      }
    }
  });

  return swiper;

}

export default featuresSlider;
