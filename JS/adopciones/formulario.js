document.getElementById('searching').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma tradicional

    // Función para obtener el texto de la opción seleccionada de un <select>
    function getSelectedText(elementId) {
        var select = document.getElementById(elementId);
        return select.options[select.selectedIndex].text;
    }

    // Recogiendo los textos de los campos del formulario
    var tipo = getSelectedText('selectTipo');
    var ubicacion = getSelectedText('selectUbicacion');
    var tamanio = getSelectedText('selectTamanio');
    var genero = getSelectedText('selectGenero');

    // Validación: Asegurarse de que todos los campos estén seleccionados
    if (tipo === "Todos" || ubicacion === "Ubicación" || tamanio === "Tamaño" || genero === "Sexo") {
        alert("Por favor, completa todos los campos antes de enviar.");
        return; // Detiene la ejecución de la función si algún campo no está completado
    }

    // Construyendo el mensaje
    var mensaje = "Hola, estoy interesado en adoptar una mascota. Aquí están mis preferencias: " +
        "\nTipo: " + tipo +
        "\nUbicación: " + ubicacion +
        "\nTamaño: " + tamanio +
        "\nGénero: " + genero;

    // Codificar el mensaje para la URL
    mensaje = encodeURIComponent(mensaje);

    // Crear el enlace de WhatsApp (reemplaza '1234567890' con tu número de teléfono)
    var whatsappUrl = "https://wa.me/1234567890?text=" + mensaje;

    // Abrir el enlace en una nueva ventana/tab
    window.open(whatsappUrl, '_blank');
});
