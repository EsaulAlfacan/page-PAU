document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("enviarWhatsapp")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const zona = document.getElementById("entrega").value;
      const nombreDueno = document.getElementById("nombreDueno").value.trim();
      const nombreMascota = document
        .getElementById("nombreMascota")
        .value.trim();
      const direccionEnvio = document
        .getElementById("direccionEnvio")
        .value.trim();
      const codigoPostal = document.getElementById("codigoPostal").value.trim();
      const telefono1 = document.getElementById("telefono1").value.trim();

      if (
        !nombreDueno ||
        !nombreMascota ||
        !telefono1 ||
        !direccionEnvio ||
        !codigoPostal
      ) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
      }

      const formaSeleccionada = document.getElementById("opcionesForma").value;
      const coloresSeleccionados = obtenerColoresSeleccionados();
      const aditamentosSeleccionados = obtenerAditamentosSeleccionados();

      let mensaje = `PLACA DE RESINA + QR (INDIVIDUAL) $119.99 mxm\n\nZona: ${zona}\nNombre del dueño de la mascota: ${nombreDueno}\nNombre de la mascota: ${nombreMascota}\nDirección de envío: ${direccionEnvio}\nCódigo postal: ${codigoPostal}\nNúmero de Teléfono: ${telefono1}\nForma seleccionada: ${formaSeleccionada}\nColores seleccionados:${coloresSeleccionados
        .map((color) => `\n- ${color}`)
        .join("")}\nAditivos seleccionados:${aditamentosSeleccionados
        .map((aditamento) => `\n- ${aditamento}`)
        .join("")}`;

      const url = `https://api.whatsapp.com/send?phone=7751171879&text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(url, "_blank");
    });
});

function obtenerColoresSeleccionados() {
  return Array.from(
    document.querySelectorAll(
      '.personalizar-forma-titulo.colores input[name="colores"]:checked'
    )
  ).map((checkbox) => checkbox.value);
}

function obtenerAditamentosSeleccionados() {
  return Array.from(
    document.querySelectorAll(
      '.opciones-colores input[name="aditamento"]:checked'
    )
  ).map((checkbox) => checkbox.value);
}
