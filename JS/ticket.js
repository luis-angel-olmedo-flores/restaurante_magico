let nombreReserva = JSON.parse(localStorage.getItem('nombreReserva'));
let numPersonas = JSON.parse(localStorage.getItem('numPersonas'));
let menuSeleccionado = JSON.parse(localStorage.getItem('menuSeleccionado'));
let ingredientesSeleccionados = JSON.parse(localStorage.getItem('ingredientesSeleccionados'));

document.getElementById('nombreReserva').innerText = `Nombre: ${nombreReserva}`;
document.getElementById('numPersonas').innerText = `Número de Personas: ${numPersonas}`;
document.getElementById('menuSeleccionado').innerText = `Menú Seleccionado: ${menuSeleccionado}`;
document.getElementById('ingredientesSeleccionados').innerText = `Ingredientes Mágicos: ${ingredientesSeleccionados.join(', ')}`;
