;
$(function() {
  dynamics.animate(
    document.querySelector('.box--front'), {
      rotate: '-3deg',
      top: '-350px'
    }, {
      type: dynamics.spring,
      duration: 1500,
      frequency: 794,
      friction: 593,
      delay: 200
    }
  );
  dynamics.animate(
    document.querySelector('.box--back'), {
      rotate: '-6deg',
      top: '-350px'
    }, {
      type: dynamics.spring,
      duration: 2000,
      frequency: 794,
      friction: 593,
      delay: 300
    }
  );
});
