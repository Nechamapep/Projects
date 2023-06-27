(function () {

  const startButton = $('#start');
  const colorDiv = $('#colorInfo');
  const blurbDiv = $('#blurb')

  startButton.click(() => {
    if (!interval) {
      startColors();
    } else {
      stopColors();
    }
  });

  let interval;
  const increment = 25;
  let r = -1;
  let g = 50;
  let b = 20;


  function startColors() {
    startButton.text('stop');
    interval = setInterval(() => {
      r += increment;
      colorDiv.text('');
      blurbDiv.slideUp('slow');
      if (r >= 255) {
        r = 0;
        g += increment;
        if (g >= 255) {
          g = 0;
          b += increment;
          if (b >= 255) {
            b = 0;
          }
        }
      }
      colorDiv.text(`Color is: rgb(${b},${g},${r})`);
      document.body.style.backgroundColor = `rgb(${b},${g},${r})`;
    }, 1000);
  }

  function stopColors() {
    startButton.text('start');
    clearInterval(interval);
    interval = 0;
  }

})();