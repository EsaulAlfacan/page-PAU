document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el input dentro de #placa1
  var toggle = document.querySelector('#placa1 input[type="checkbox"]');

  // Selecciona la sección que quieres mostrar/ocultar
  var placaData = document.querySelector("#pd2");

  // Agrega un controlador de eventos para el cambio de estado del toggle
  toggle.addEventListener("change", function () {
    if (this.checked) {
      // Muestra el contenido si el checkbox está marcado
      placaData.style.display = "flex";
    } else {
      // Oculta el contenido si el checkbox no está marcado
      placaData.style.display = "none";
    }
  });
});
