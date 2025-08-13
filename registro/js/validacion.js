document.getElementById("regBtn").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;

    // Validaciones paso a paso
    if (
        nombre === "" ||
        apellido === "" ||
        email === "" ||
        password1 === "" ||
        password2 === ""
    ) {
        showAlertError();
        return;
    }

    if (password1.length < 6) {
        showAlertError();
        return;
    }

    if (password1 !== password2) {
        showAlertError();
        return;
    }

    if (!terminos) {
        showAlertError();
        return;
    }

    // Todo correcto
    showAlertSuccess();
});

function showAlertSuccess() {
    resetAlerts();
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    resetAlerts();
    document.getElementById("alert-danger").classList.add("show");
}

function resetAlerts() {
    let success = document.getElementById("alert-success");
    let danger = document.getElementById("alert-danger");

    success.classList.remove("show");
    danger.classList.remove("show");

    // Reiniciar animación de Bootstrap
    void success.offsetWidth;
    void danger.offsetWidth;
}
