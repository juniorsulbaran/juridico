document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const countDisplay = document.getElementById("matchCount");
    let currentIndex = -1;
    let matches = [];

    searchInput.addEventListener("keyup", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const paragraphs = document.querySelectorAll("#content p, #content strong");

        // Limpiar coincidencias anteriores
        matches = [];
        paragraphs.forEach(paragraph => {
            let innerHTML = paragraph.innerHTML;
            const regex = new RegExp(`(${searchTerm})`, "gi");
            innerHTML = innerHTML.replace(/<mark>/g, "").replace(/<\/mark>/g, ""); // Remover marcas anteriores
            paragraph.innerHTML = innerHTML.replace(regex, '<mark>$1</mark>');

            // Mostrar u ocultar los párrafos según la coincidencia
            if (searchTerm === "") {
                paragraph.style.display = ""; // Mostrar todos los párrafos si no hay término de búsqueda
            } else if (innerHTML.toLowerCase().includes(searchTerm)) {   
                matches.push(paragraph); // Agregar a la lista de coincidencias
            } else {
               
            }
        });

        // Actualizar el contador de coincidencias
        countDisplay.textContent = `Encontradas: ${matches.length}`;
        currentIndex = -1; // Reiniciar el índice al buscar de nuevo
    });

    // Navegar entre las coincidencias
    document.getElementById("nextButton").addEventListener("click", function() {
        if (matches.length > 0) {
            currentIndex = (currentIndex + 1) % matches.length; // Incrementar el índice
            highlightMatch(matches[currentIndex]);
        }
    });

    document.getElementById("prevButton").addEventListener("click", function() {
        if (matches.length > 0) {
            currentIndex = (currentIndex - 1 + matches.length) % matches.length; // Decrementar el índice
            highlightMatch(matches[currentIndex]);
        }
    });

    function highlightMatch(paragraph) {
        // Desmarcar todos los párrafos
        matches.forEach(match => {
            match.style.backgroundColor = ""; // Limpiar el fondo
        });
        // Resaltar el párrafo actual
        paragraph.style.backgroundColor = "yellow"; // Cambiar el color de fondo
        paragraph.scrollIntoView({ behavior: "smooth", block: "center" }); // Desplazar a la coincidencia
    }
});

