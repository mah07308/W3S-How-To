const tabLinks = document.querySelectorAll('.tabLink');
const tabContents = document.querySelectorAll('.tabContent');

document.getElementById('defaultOpen').click();

function openCity(e, cityName) {
  removeActive();
  hideContent();

  e.target.classList.add('active');
  document.getElementById(cityName).style.display = 'block';
}

function removeActive() {
  tabLinks.forEach(tabLink => tabLink.classList.remove('active'));
}

function hideContent() {
  tabContents.forEach(tabContent => (tabContent.style.display = 'none'));
}
