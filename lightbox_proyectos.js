function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightbox.style.display = 'flex'; // Mostrar el lightbox
    lightboxImg.src = element.src; // Establecer la fuente de la imagen grande

    // Mantener el scroll en la posición actual
    const scrollPosition = window.scrollY;
    lightbox.style.transform = `translateY(-${scrollPosition}px)`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Ocultar el lightbox
}




function openLightbox(element) {
    const lightbox = document.getElementById('lightbox2');
    const lightboxImg = document.getElementById('lightbox-img2');

    lightbox.style.display = 'flex'; // Mostrar el lightbox
    lightboxImg.src = element.src; // Establecer la fuente de la imagen grande

    // Mantener el scroll en la posición actual
    const scrollPosition = window.scrollY;
    lightbox.style.transform = `translateY(-${scrollPosition}px)`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox2');
    lightbox.style.display = 'none'; // Ocultar el lightbox
}
