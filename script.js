cssVars({
  watch: true
});

document.querySelector('button').addEventListener('click', function() {
  document.documentElement.style.setProperty('--color-background', 'red');
});
