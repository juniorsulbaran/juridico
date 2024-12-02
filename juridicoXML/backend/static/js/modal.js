
    // Obtener elementos del DOM
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];
    var modalContent = document.getElementById("modalContent");

    // Cuando el usuario hace clic en el botón, se abre el modal
    btn.onclick = function() {
        listModal()
        modal.style.display = "block";
        
    }

    // Cuando el usuario hace clic en la 'x', se cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario hace clic fuera del modal, se cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

   


