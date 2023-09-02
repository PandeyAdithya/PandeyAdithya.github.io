(function () {
  const scrolls = document.querySelectorAll(".js-scroll");

  function elementIsInView(el, divisor = 1) {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight / divisor;
  }

  function scrollAnimation() {
    scrolls.forEach((el) => {
      if (elementIsInView(el, 1)) {
        el.classList.add("scrolled");
      } else if (!elementIsInView(el)) {
        el.classList.remove("scrolled");
      }
    });
  }
  window.addEventListener("scroll", scrollAnimation);
})();