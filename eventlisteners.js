window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 750) {
    opacity = 1 - currentScroll / 750;
  } else {
    opacity = 0;
  }
  document.getElementById('logo').style.opacity = opacity;
});