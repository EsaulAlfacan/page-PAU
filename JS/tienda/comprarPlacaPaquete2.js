document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el input dentro de #placa1
  let toggle = document.querySelector('#placa2 input[type="checkbox"]');

  // Selecciona la sección que quieres mostrar/ocultar
  let placaData = document.querySelector("#pd2");

  // Selecciona el botón por su ID
  let btnPlaca1 = document.getElementById("btnPlaca2");

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

  // Agrega un controlador de eventos para el clic del botón
  btnPlaca1.addEventListener("click", function () {
    // Cambia el estilo de 'pd2' para ocultarlo, independientemente del estado del toggle
    placaData.style.display = "none";
  });
});
