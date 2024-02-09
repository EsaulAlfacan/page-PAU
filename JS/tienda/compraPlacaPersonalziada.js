document.getElementById('enviarWhatsapp').addEventListener('click', function() {
    // Obtener los datos seleccionados e ingresados por el usuario
    const zona = document.getElementById('entrega').value;
    const nombreDueno = document.getElementById('nombreDueno').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const telefono1 = document.getElementById('telefono1').value;
    const telefono2 = document.getElementById('telefono2').value;
    const formaSeleccionada = document.getElementById('opcionesForma').value;
    const coloresSeleccionados = obtenerColoresSeleccionados();
    const aditamentosSeleccionados = obtenerAditamentosSeleccionados();

    // Construir el mensaje de WhatsApp
    let mensaje = `
        Zona: ${encodeURIComponent(zona)}
        Nombre del dueño de la mascota: ${encodeURIComponent(nombreDueno)}
        Nombre de la mascota: ${encodeURIComponent(nombreMascota)}
        Número de Teléfono: ${encodeURIComponent(telefono1)}
        Otro Número de Teléfono: ${encodeURIComponent(telefono2)}
        Forma seleccionada: ${encodeURIComponent(formaSeleccionada)}
        Colores seleccionados:${coloresSeleccionados.map(color => `\n- ${encodeURIComponent(color)}`).join('')}
        Aditivos seleccionados:${aditamentosSeleccionados.map(aditamento => `\n- ${encodeURIComponent(aditamento)}`).join('')}
    `;

    // Crear la URL para enviar el mensaje por WhatsApp
    const url = `https://api.whatsapp.com/send?phone=7751171879&text=${encodeURIComponent(mensaje)}`;

    // Abrir la URL en una nueva pestaña
    window.open(url);
});

function obtenerColoresSeleccionados() {
    const checkboxes = document.querySelectorAll('.personalizar-forma-titulo.colores input[name="colores"]:checked');
    const coloresSeleccionados = Array.from(checkboxes).map(checkbox => checkbox.value);
    return coloresSeleccionados;
}

function obtenerAditamentosSeleccionados() {
    const checkboxes = document.querySelectorAll('.opciones-colores input[name="aditamento"]:checked');
    const aditamentosSeleccionados = Array.from(checkboxes).map(checkbox => checkbox.value);
    return aditamentosSeleccionados;
}
