document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el envío tradicional del formulario

        // Captura de datos del formulario
        const nombreCompleto = document.getElementById('nombreCompleto').value;
        const numeroCelular = document.getElementById('numeroCelular').value;
        const estado = document.getElementById('estado').value;
        const ciudad = document.getElementById('ciudad').value;
        const tipoMascota = document.getElementById('tipoMascota').value;
        const nombreMascota = document.getElementById('nombreMascota').value;
        const raza = document.getElementById('raza').value;
        const edad = document.getElementById('edad').value;
        const tamano = document.getElementById('tamano').value;
        const peso = document.getElementById('peso').value;
        const color = document.getElementById('color').value;
        const caracteristicaDistintiva = document.getElementById('caracteristicaDistintiva').value;

        // Construcción del mensaje
        let mensaje = `Hola, quiero registrar a mi mascota con los siguientes datos:%0A`;
        mensaje += `Nombre del dueño: ${nombreCompleto}%0A`;
        mensaje += `Número de celular: ${numeroCelular}%0A`;
        mensaje += `Estado: ${estado}, Ciudad: ${ciudad}%0A`;
        mensaje += `Tipo de mascota: ${tipoMascota}, Nombre de la mascota: ${nombreMascota}%0A`;
        mensaje += `Raza: ${raza}, Edad: ${edad} años, Tamaño: ${tamano}, Peso: ${peso} kg, Color: ${color}%0A`;
        mensaje += `Característica distintiva: ${caracteristicaDistintiva}%0A`;

        // Agregar aquí la captura de la información de vacunas si es necesario

        // Envío del mensaje a WhatsApp
        // Nota: Cambia el "1234567890" por tu número de teléfono donde quieras recibir los mensajes
        const whatsappURL = `https://wa.me/1234567890?text=${mensaje}`;
        window.open(whatsappURL, '_blank');
    });
});
