const heroSvg = () => {
  const animations = [
    {
      name: 'anim1',
      steps: [
        { line: '.anim1-line1', circles: '.anim1-circle1' },
        { line: '.anim1-line2', circles: '.anim1-circle2' },
      ],
    },
    {
      name: 'anim2',
      steps: [
        { line: '.anim2-line1', circles: '.anim2-circle1' },
      ],
    },
    {
      name: 'anim3',
      steps: [
        { line: '.anim3-line1', circles: '.anim3-circle1' },
        { line: '.anim3-line2', circles: '.anim3-circle2' },
      ],
    },
    {
      name: 'anim4',
      steps: [
        { line: '.anim4-line1', circles: '.anim4-circle1' },
        { line: '.anim4-line2', circles: '.anim4-circle2' },
      ],
    },
    {
      name: 'anim5',
      steps: [
        { line: '.anim5-line1', circles: '.anim5-circle1' },
        { line: '.anim5-line2', circles: '.anim5-circle2' },
      ],
    },
  ];

  function activateCircle(circleGroup) {
    if (!circleGroup || circleGroup.length < 2) return;

    const [outer, inner] = circleGroup;

    outer.setAttribute('stroke', '#7AE99D');
    outer.setAttribute('r', '22');

    inner.setAttribute('fill', '#7AE99D');
    inner.setAttribute('r', '9');
  }

  function deactivateCircle(circleGroup) {
    if (!circleGroup || circleGroup.length < 2) return;

    const [outer, inner] = circleGroup;
    outer.setAttribute('stroke', 'var(--globalBr)');
    outer.setAttribute('r', '13.5');

    inner.setAttribute('fill', 'var(--globalBr)');
    inner.setAttribute('r', '6');
  }

  function animatePathSet({ steps }) {
    const runStep = (index) => {
      if (index >= steps.length) return;

      const currentStep = steps[index];
      const lineEl = document.querySelector(currentStep.line);
      const circleEls = document.querySelectorAll(currentStep.circles);

      if (lineEl) {
        lineEl.classList.remove('exit');
        lineEl.classList.add('active');
      }

      setTimeout(() => {
        activateCircle(circleEls);
      }, 300);

      setTimeout(() => {
        if (lineEl) {
          lineEl.classList.remove('active');
          lineEl.classList.add('exit');
        }

        deactivateCircle(circleEls);

        setTimeout(() => {
          if (lineEl) lineEl.classList.remove('exit');
          runStep(index + 1);
        }, 1000);
      }, 1000);
    };

    runStep(0);
  }

  function startRandomAnimationLoop() {
    let lastIndex = -1;

    const triggerAnimation = () => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * animations.length);
      } while (nextIndex === lastIndex && animations.length > 1);

      lastIndex = nextIndex;

      const anim = animations[nextIndex];
      animatePathSet(anim);

      const delay = Math.random() * 800 + 1500;
      setTimeout(triggerAnimation, delay);
    };

    triggerAnimation();
  }

  startRandomAnimationLoop();
};

export default heroSvg;
