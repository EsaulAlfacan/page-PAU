document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Previene el envío tradicional del formulario

    // Captura de datos del formulario
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const numeroCelular = document.getElementById("numeroCelular").value;
    const estado = document.getElementById("estado").value;
    const ciudad = document.getElementById("ciudad").value;
    const tipoMascota = document.getElementById("tipoMascota").value;
    const nombreMascota = document.getElementById("nombreMascota").value;
    const raza = document.getElementById("raza").value;
    const edad = document.getElementById("edad").value;
    const esterilizado = document.getElementById("esterilizado").value;
    const tamano = document.getElementById("tamano").value;
    const peso = document.getElementById("peso").value;
    const color = document.getElementById("color").value;
    const caracteristicaDistintiva = document.getElementById(
      "caracteristicaDistintiva"
    ).value;

    // Construcción del mensaje
    let mensaje = `Hola, quiero registrar a mi mascota con los siguientes datos:%0A`;
    mensaje += `Nombre del dueño: ${nombreCompleto}%0A`;
    mensaje += `Número de celular: ${numeroCelular}%0A`;
    mensaje += `Estado: ${estado}, Ciudad: ${ciudad}%0A`;
    mensaje += `Tipo de mascota: ${tipoMascota}, Nombre de la mascota: ${nombreMascota}%0A`;
    mensaje += `Raza: ${raza}, Edad: ${edad} años, Esterilizado: ${esterilizado} , Tamaño: ${tamano}, Peso: ${peso} kg, Color: ${color}%0A`;
    mensaje += `Característica distintiva: ${caracteristicaDistintiva}%0A`;

    // Captura de información de vacunas
    const vacunasSeleccionadas = [];
    const vacunas = [
      { id: "parvovirus", fechaId: "fechaParvovirus", nombre: "Parvovirus" },
      { id: "moquillo", fechaId: "fechaMoquillo", nombre: "Moquillo" },
      { id: "rabia", fechaId: "fechaRabia", nombre: "Rabia" },
      {
        id: "tripleFelina",
        fechaId: "fechaTripleFelina",
        nombre: "Triple Felina",
      },
      { id: "feLV", fechaId: "fechaFeLV", nombre: "FeLV" },
    ];

    vacunas.forEach((vacuna) => {
      const checkbox = document.getElementById(vacuna.id);
      const fechaVacuna = document.getElementById(vacuna.fechaId).value;
      if (checkbox.checked) {
        let mensajeVacuna = `${vacuna.nombre}`;
        if (fechaVacuna) {
          mensajeVacuna += ` (Fecha: ${fechaVacuna})`;
        }
        vacunasSeleccionadas.push(mensajeVacuna);
      }
    });

    if (vacunasSeleccionadas.length > 0) {
      mensaje += `Vacunas aplicadas: ${vacunasSeleccionadas.join(", ")}%0A`;
    } else {
      mensaje += `Vacunas aplicadas: Ninguna%0A`;
    }

    // Envío del mensaje a WhatsApp
    // Nota: Asegúrate de cambiar "1234567890" por tu número de teléfono donde quieras recibir los mensajes
    const whatsappURL = `https://wa.me/7751171879?text=${mensaje}`;
    window.open(whatsappURL, "_blank");
  });
});
