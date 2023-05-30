(async () => {
    let password = '';

    while (password !== 'KANTICUENTOS') {
        let { value: enteredPassword } = await Swal.fire({
            title: 'BIENVENIDO',
            input: 'password',
            inputLabel: 'Ingresar Usuario Autorizado',
            inputPlaceholder: 'Usuario',
            inputAttributes: {
                maxlength: 20,
                autocapitalize: 'off',
                autocorrect: 'off',
            },
            confirmButtonText: 'Iniciar Sesion',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor ingresar usuario';
                }
            },
        });
        if (enteredPassword) {
            password = enteredPassword;
            if (password === 'KANTICUENTOS') {
                Swal.fire('BIENVENIDO');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid password',
                    text: 'Please try again',
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        } 
    }
})();




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
