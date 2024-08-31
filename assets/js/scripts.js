$(document).ready(function() {
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

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
      
        alert('Formulario enviado con éxito. Gracias por contactarnos!');
        
        this.reset();
      });
});