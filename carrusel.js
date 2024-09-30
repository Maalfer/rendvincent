let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Oculta el slide actual
    slides[currentSlide].style.display = 'none';
    
    // Cambia el índice del slide actual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Muestra el nuevo slide
    slides[currentSlide].style.display = 'block';

    // Actualiza la miniatura seleccionada
    updateThumbnailSelection();
}

function selectSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Oculta el slide actual
    slides[currentSlide].style.display = 'none';
    
    // Establece el índice de la imagen seleccionada
    currentSlide = index;

    // Muestra el nuevo slide
    slides[currentSlide].style.display = 'block';

    // Actualiza la miniatura seleccionada
    updateThumbnailSelection();
}

// Función para actualizar el estilo de la miniatura seleccionada
function updateThumbnailSelection() {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach((thumb, index) => {
        if (index === currentSlide) {
            thumb.style.borderColor = '#007bff'; // Color del borde para la miniatura activa
        } else {
            thumb.style.borderColor = 'transparent'; // Sin borde para las miniaturas no activas
        }
    });
}

// Inicializa mostrando solo el primer slide y actualiza las miniaturas
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none'; // Muestra solo el primer slide
    });

    // Actualiza la selección de miniaturas
    updateThumbnailSelection();
});
