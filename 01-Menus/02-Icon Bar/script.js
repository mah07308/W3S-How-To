const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', function () {
    removeActive();
    icon.classList.add('active');
  });
});

function removeActive() {
  icons.forEach(icon => {
    icon.classList.remove('active');
  });
}
