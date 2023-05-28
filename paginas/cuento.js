import Swal from 'sweetalert2';

Swal.fire('¡Hola!', 'Este es un mensaje de alerta', 'info');


var botonMenu = document.getElementById("boton-menu");
botonMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    document.querySelector(".dropdown").classList.toggle("show");
});

window.addEventListener("click", function () {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
        };
    };
});

