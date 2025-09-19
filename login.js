window.addEventListener('resize', () => {
  const footer = document.querySelector('.footer');
  if (window.innerHeight < 500) {
    footer.style.display = 'none'; // keyboard likely open
  } else {
    footer.style.display = 'block'; // keyboard closed
  }
});