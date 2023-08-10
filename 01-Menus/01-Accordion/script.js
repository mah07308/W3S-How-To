// let accordions = document.querySelectorAll('.accordion');

// for (i = 0; i < accordions.length; i++) {
//   accordions[i].addEventListener('click', function () {
//     this.classList.toggle('active');

//     let panel = this.nextElementSibling;

//     if (panel.style.display === 'block') {
//       panel.style.display = 'none';
//     } else {
//       panel.style.display = 'block';
//     }
//   });
// }

// FOR ANIMATED SLIDE DOWN ACCORDION

let accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    accordion.classList.toggle('active');

    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
