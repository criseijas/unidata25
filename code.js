
const carousel = document.querySelector('#carouselMarcas .carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');

// Clona los primeros elementos para crear un bucle visual
items.forEach((item, i) => {
  if (i < 2) {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  }
});

// Desactiva clic derecho
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Desactiva algunas teclas de inspección
  document.onkeydown = function(e) {
    if (e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
        (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
      return false;
    }
  };
