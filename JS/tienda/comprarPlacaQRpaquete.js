document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("enviarWhatsapp")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const direccionEnvio = document
        .getElementById("direccionEnvio")
        .value.trim();
      const codigoPostal = document.getElementById("codigoPostal").value.trim();

      // Verifica la dirección de envío y el código postal
      if (!direccionEnvio || !codigoPostal) {
        alert("Por favor, completa la dirección de envío y el código postal.");
        return;
      }

      let mensajeCompleto = "Detalles de la orden:\n\n";
      let todosLosDatosCompletos = true;

      for (let i = 1; i <= 3; i++) {
        // Solo proceder si la placa está activada
        if (document.getElementById(`placa${i}`).checked) {
          const datosPlaca = obtenerDatosPlaca(i);
          if (datosPlaca) {
            mensajeCompleto += `Placa ${i}:\n${datosPlaca}\n\n`;
          } else {
            todosLosDatosCompletos = false;
            break;
          }
        }
      }

      if (!todosLosDatosCompletos) {
        alert(
          "Por favor, completa todos los campos para las placas activadas."
        );
        return;
      }

      mensajeCompleto += `Dirección de envío: ${direccionEnvio}\nCódigo postal: ${codigoPostal}`;

      // Construye la URL para enviar el mensaje por WhatsApp
      const urlWhatsApp = `https://api.whatsapp.com/send?phone=+5217751171879&text=${encodeURIComponent(
        mensajeCompleto
      )}`;
      window.open(urlWhatsApp, "_blank");
    });
});

function obtenerDatosPlaca(numPlaca) {
  const nombreDueno = document
    .getElementById(`nombreDueno${numPlaca}`)
    .value.trim();
  const nombreMascota = document
    .getElementById(`nombreMascota${numPlaca}`)
    .value.trim();
  const telefono = document.getElementById(`telefono${numPlaca}`).value.trim();
  const formaSeleccionada = document.getElementById(
    `opcionesForma${numPlaca}`
  ).value;
  const coloresSeleccionados = obtenerSeleccionados(`colores${numPlaca}`);
  const aditamentosSeleccionados = obtenerSeleccionados(
    `aditamento${numPlaca}`
  );

  // Verifica que todos los campos estén completos
  if (
    !nombreDueno ||
    !nombreMascota ||
    !telefono ||
    formaSeleccionada === "Default" ||
    coloresSeleccionados.length === 0 ||
    aditamentosSeleccionados.length === 0
  ) {
    return null; // Retorna null si algún campo está incompleto
  }

  // Construye y retorna el mensaje para la placa actual
  return `Nombre del dueño: ${nombreDueno}
Nombre de la mascota: ${nombreMascota}
Número de Teléfono: ${telefono}
Forma seleccionada: ${formaSeleccionada}
Colores seleccionados: ${coloresSeleccionados.join(", ")}
Aditamentos seleccionados: ${aditamentosSeleccionados.join(", ")}`;
}

function obtenerSeleccionados(nombreGrupo) {
  return Array.from(
    document.querySelectorAll(`input[name="${nombreGrupo}"]:checked`)
  ).map((el) => el.nextSibling.textContent.trim());
}
