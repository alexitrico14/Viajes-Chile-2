$(document).ready(function() {
    // Funcion Alertas para formulario contacto
    $('button.btn-primary').click(function() {
        var nombre = $('#exampleFormControlInput1').val();
        var asunto = $('#exampleFormControlInput2').val();
        var mensaje = $('#exampleFormControlTextarea1').val();

        if (nombre === '' || asunto === '' || mensaje === '') {
            alert('Por favor complete todos los campos.');
        } else {
            alert('Se ha enviado el correo.');
        }
    });

    // Inicializar todos los tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});