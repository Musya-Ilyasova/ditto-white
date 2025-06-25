const heroSvg = () => {
  const animations = [
    {
      name: 'anim1',
      step1: '.anim1-line1',
      circle1: '.anim1-circle1',
      step2: '.anim1-line2',
      circle2: '.anim1-circle2',
    },
    {
      name: 'anim2',
      step1: '.anim2-line1',
      circle1: '.anim2-circle1',
    },
    {
      name: 'anim3',
      step1: '.anim3-line1',
      circle1: '.anim3-circle1',
      step2: '.anim3-line2',
      circle2: '.anim3-circle2',
    },
    {
      name: 'anim4',
      step1: '.anim4-line1',
      circle1: '.anim4-circle1',
    },
    {
      name: 'anim5',
      step1: '.anim5-line1',
      circle1: '.anim5-circle1',
      step2: '.anim5-line2',
      circle2: '.anim5-circle2',
    },
  ];

  document.querySelectorAll('.leave').forEach(el => {
    const len = el.getTotalLength();
    el.style.setProperty('--pathLen', len);     // для keyframes
    el.style.strokeDasharray = len;             // целиком «залитая» линия
  });

  let isAnimating = false;

  function activateCircle(elGroup, enlarge = false) {
    if (!elGroup || elGroup.length < 2) return;
    const [outer, inner] = elGroup;

    outer.setAttribute('stroke', '#7AE99D');
    outer.setAttribute('r', enlarge ? '22' : '13.5');
    outer.setAttribute('fill', enlarge ? 'var(--svgHeroCircleBg)' : 'var(--svgIconsBg)');

    inner.setAttribute('fill', '#7AE99D');
    inner.setAttribute('r', enlarge ? '9' : '6');
  }

  function deactivateCircle(elGroup) {
    if (!elGroup || elGroup.length < 2) return;
    const [outer, inner] = elGroup;

    outer.setAttribute('stroke', 'var(--globalBr)');
    outer.setAttribute('r', '13.5');
    outer.setAttribute('fill', 'var(--svgIconsBg)');

    inner.setAttribute('fill', 'var(--globalBr)');
    inner.setAttribute('r', '6');
  }

  function applyLineClass(selector, className) {
    document.querySelectorAll(selector)
      .forEach(el => el.classList.add(className));
  }

  function removeLineClass(selector, className) {
    document.querySelectorAll(selector)
      .forEach(el => el.classList.remove(className));
  }

  function resetAll() {
    animations.forEach(anim => {
      if (anim.step1) {
        removeLineClass(anim.step1, 'active');
        removeLineClass(anim.step1, 'exit');
      }
      if (anim.step2) {
        removeLineClass(anim.step2, 'active');
        removeLineClass(anim.step2, 'exit');
      }
      if (anim.circle1) {
        const group1 = document.querySelectorAll(anim.circle1);
        deactivateCircle(group1);
      }
      if (anim.circle2) {
        const group2 = document.querySelectorAll(anim.circle2);
        deactivateCircle(group2);
      }
    });

    // Проверка, что step2 не имеет класса active
    animations.forEach(anim => {
      if (anim.step2) {
        const el = document.querySelector(anim.step2);
        if (el && el.classList.contains('active')) {
          console.warn(`Класс active остался на ${anim.step2} после сброса`);
          el.classList.remove('active');
        }
      }
    });
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function animateFullSet(onComplete) {
    if (isAnimating) {
      return;
    }
    isAnimating = true;

    resetAll();

    try {
      // Шаг 1: Активировать step1
      animations.forEach(anim => {
        if (anim.step1) {
          applyLineClass(anim.step1, 'active');
        }
      });
      await delay(1900);

      // Шаг 2: Активировать circle1
      animations.forEach(anim => {
        if (anim.circle1) {
          const group = document.querySelectorAll(anim.circle1);
          activateCircle(group, false);
        }
      });
      await delay(600); // 1с для переходов circle (0.6с + буфер)

      // Шаг 3: Деактивировать step1, активировать step2
      animations.forEach(anim => {
        if (anim.step1) {
          removeLineClass(anim.step1, 'active');
          applyLineClass(anim.step1, 'exit');
        }
        if (anim.step2) {
          applyLineClass(anim.step2, 'active');
        }
      });
      await delay(1900); // 2.5с для lineEnter (2с + буфер)

      // Шаг 4: Активировать circle2
      animations.forEach(anim => {
        if (anim.circle2) {
          const group = document.querySelectorAll(anim.circle2);
          activateCircle(group, true);
        }
      });
      await delay(600); // 1с для переходов circle (0.6с + буфер)

      // Шаг 5: Деактивировать всё
      animations.forEach(anim => {
        if (anim.step2) {
          removeLineClass(anim.step2, 'active');
          applyLineClass(anim.step2, 'exit');
        }
        if (anim.circle1) {
          const group1 = document.querySelectorAll(anim.circle1);
          deactivateCircle(group1);
        }
        if (anim.circle2) {
          const group2 = document.querySelectorAll(anim.circle2);
          deactivateCircle(group2);
        }
      });
      await delay(1000);
      resetAll();
      isAnimating = false;

      if (typeof onComplete === 'function') onComplete();
    } catch (error) {
      resetAll();
      isAnimating = false;
    }
  }

  async function startLoop() {
    const loop = async () => {
      await animateFullSet();
      const delayMs = 0;
      await delay(delayMs);
      loop();
    };
    loop();
  }

  startLoop();
};

export default heroSvg;
