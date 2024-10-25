document.getElementById('hacerReservacion').addEventListener('click', function() {
    let nombre = document.getElementById('nombre').value;
    let personas = document.getElementById('personas').value;
    let menu = document.getElementById('menu').value;
    
    let ingredientes = Array.from(document.getElementById('ingredientes').selectedOptions)
        .map(option => option.value);

    localStorage.setItem('nombreReserva', JSON.stringify(nombre));
    localStorage.setItem('numPersonas', JSON.stringify(personas));
    localStorage.setItem('menuSeleccionado', JSON.stringify(menu));
    localStorage.setItem('ingredientesSeleccionados', JSON.stringify(ingredientes));

    document.getElementById('mensajeConfirmacion').innerText = "Reserva Exitosa";
    document.getElementById('mensajeConfirmacion').style.color = "green";
});

document.getElementById('generarTicket').addEventListener('click', function() {
    window.open('ticket.html', '_blank', 'width=400,height=400');
});
