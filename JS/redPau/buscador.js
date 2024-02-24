document.addEventListener("DOMContentLoaded", () => {
  const botonBuscar = document.querySelector(
    ".contenidoPrincipal__buscador button"
  );
  const inputBusqueda = document.getElementById("busqueda");
  const main = document.querySelector(".contenidoPrincipal");

  botonBuscar.addEventListener("click", (e) => {
    e.preventDefault(); // Previene la acción predeterminada del formulario
    const textoBusqueda = inputBusqueda.value.trim().toLowerCase();
    const seccionesMascotas = main.querySelectorAll(".mascota");

    seccionesMascotas.forEach((seccion) => {
      const nombreMascota = seccion
        .querySelector(".mascota__nombre")
        .textContent.toLowerCase();
      // Muestra solo las secciones que coinciden con el texto de búsqueda
      if (nombreMascota.includes(textoBusqueda)) {
        seccion.style.display = "";
      } else {
        seccion.style.display = "none";
      }
    });
  });
});
