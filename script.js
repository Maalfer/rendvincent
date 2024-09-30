document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura y borrado dinámico
    const textElement = document.getElementById("dynamic-text");
    if (textElement) {
        const texts = [
            "A versatile artist with abilities in illustration, sculpture and design.",
            "Hola esto es una prueba."
        ];
        
        let currentTextIndex = 0;
        let index = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[currentTextIndex];
            
            if (isDeleting) {
                // Borrado de texto
                textElement.innerHTML = currentText.substring(0, index - 1);
                index--;

                if (index === 0) {
                    isDeleting = false;
                    currentTextIndex = (currentTextIndex + 1) % texts.length;
                    setTimeout(type, 500); // Pausa antes de comenzar a escribir el nuevo texto
                } else {
                    setTimeout(type, 50); // Velocidad de borrado
                }
            } else {
                // Escritura de texto
                textElement.innerHTML = currentText.substring(0, index);
                index++;

                if (index === currentText.length) {
                    isDeleting = true;
                    setTimeout(type, 2000); // Pausa antes de comenzar a borrar
                } else {
                    setTimeout(type, 50); // Velocidad de escritura
                }
            }
        }

        type();
    }

    // Animación de elementos al cargar la página
    const serviceItems = document.querySelectorAll('#about .service-item');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    }

    function animateAllElements() {
        serviceItems.forEach(item => {
            item.classList.add('visible'); // Asegúrate de que todos los elementos tengan la clase 'visible'
        });
    }

    // Ejecutar la animación al cargar la página
    animateAllElements();

    // Funcionalidad para ocultar/mostrar el header al hacer scroll
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const delta = 5; // La cantidad mínima de scroll para ocultar el header

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - scrollTop) <= delta) return; // Evita cambios pequeños

        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Si se está desplazando hacia abajo y el scroll es mayor que la altura del header
            header.style.transform = 'translateY(-100%)'; // Oculta el header
        } else {
            // Si se está desplazando hacia arriba
            header.style.transform = 'translateY(0)'; // Muestra el header
        }

        lastScrollTop = scrollTop; // Actualiza la última posición del scroll
    });
});
