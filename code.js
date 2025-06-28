
const carousel = document.querySelector('#carouselMarcas .carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');

// Clona los primeros elementos para crear un bucle visual
items.forEach((item, i) => {
  if (i < 2) {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  }
});


