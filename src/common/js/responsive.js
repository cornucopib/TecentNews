(function(window, document) {
  function resize() {
    var ww = window.innerWidth;
    if (ww > window.screen.width) {
      window.requestAnimationFrame(resize);
    } else {
      console.log("ww", ww);
      if (ww > 750) {
        ww = 750;
      }
      document.documentElement.style.fontSize = (ww * 17) / 375 + "px";
    }
  }

  resize();

  window.addEventListener("resize", resize);
})(window, document);
