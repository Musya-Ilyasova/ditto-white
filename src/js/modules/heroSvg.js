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

  function activateCircle(elGroup, enlarge = false) {
    if (!elGroup || elGroup.length < 2) return;
    const [outer, inner] = elGroup;

    outer.setAttribute('stroke', '#7AE99D');
    outer.setAttribute('r', enlarge ? '22' : '13.5');
    if (enlarge) {
      outer.setAttribute('fill', 'var(--svgHeroCircleBg)');
    } else {
      outer.setAttribute('fill', 'var(--svgIconsBg)');
    }

    inner.setAttribute('fill', '#7AE99D');
    inner.setAttribute('r', enlarge ? '9' : '6');
  }

  function deactivateCircle(elGroup) {
    if (!elGroup || elGroup.length < 2) return;
    const [outer, inner] = elGroup;

    outer.setAttribute('stroke', 'var(--globalBr)');
    outer.setAttribute('r', '13.5');
    outer.setAttribute('fill', 'var(--svgIconsBg)'); // вернуть прозрачную/исходную

    inner.setAttribute('fill', 'var(--globalBr)');
    inner.setAttribute('r', '6');
  }

  function applyLineClass(selector, className) {
    const el = document.querySelector(selector);
    if (el) el.classList.add(className);
  }

  function removeLineClass(selector, className) {
    const el = document.querySelector(selector);
    if (el) el.classList.remove(className);
  }

  function animateFullSet(onComplete) {
    // Step 1: Activate all step1 lines
    animations.forEach(anim => {
      if (anim.step1) {
        removeLineClass(anim.step1, 'exit');
        applyLineClass(anim.step1, 'active');
      }
    });

    // Step 2: Activate all circle1 (only green fill, no enlarge)
    setTimeout(() => {
      animations.forEach(anim => {
        if (anim.circle1) {
          const group = document.querySelectorAll(anim.circle1);
          activateCircle(group, false);
        }
      });
    }, 600);

    // Step 3: Deactivate all step1, Activate step2
    setTimeout(() => {
      animations.forEach(anim => {
        if (anim.step1) {
          removeLineClass(anim.step1, 'active');
          applyLineClass(anim.step1, 'exit');
        }
        if (anim.step2) {
          removeLineClass(anim.step2, 'exit');
          applyLineClass(anim.step2, 'active');
        }
      });

      // Отложенное увеличение circle2 (например, +200 мс после начала step2)
      setTimeout(() => {
        animations.forEach(anim => {
          if (anim.circle2) {
            const group = document.querySelectorAll(anim.circle2);
            activateCircle(group, true); // enlarge
          }
        });
      }, 800); // задержка для эффекта "позже"
    }, 2000);

    // Step 4: Reset everything
    setTimeout(() => {
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

      setTimeout(() => {
        animations.forEach(anim => {
          if (anim.step1) removeLineClass(anim.step1, 'exit');
          if (anim.step2) removeLineClass(anim.step2, 'exit');
        });

        if (typeof onComplete === 'function') onComplete();
      }, 1600);
    }, 4000);
  }


  function startLoop() {
    const loop = () => {
      animateFullSet(() => {
        const delay = Math.random() * 1600 + 1000;
        setTimeout(loop, delay);
      });
    };
    loop();
  }

  startLoop();
};

export default heroSvg;
