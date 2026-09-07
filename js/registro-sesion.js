document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const ci = params.get("paciente");
  const paciente = HISTORIAL_SESIONES[ci];

  const contenido = document.getElementById("registro-sesion-contenido");
  const mensajeVacio = document.getElementById("registro-sesion-vacio");
  const volverEl = document.getElementById("volver-historial");

  if (!paciente) {
    contenido.hidden = true;
    mensajeVacio.hidden = false;
    return;
  }

  document.getElementById("paciente-nombre").textContent = paciente.nombre;
  document.getElementById("paciente-ci").textContent = paciente.ci;
  volverEl.href = `historial-sesiones.html?paciente=${paciente.ci}`;

  const form = document.getElementById("registro-sesion-form");
  const estadoRadios = form.querySelectorAll('input[name="estado"]');
  const duracionInput = document.getElementById("duracion");
  const actividadesCheckboxes = document.querySelectorAll('input[name="actividades"]');

  const actualizarCamposSegunEstado = () => {
    const estadoSeleccionado = form.querySelector('input[name="estado"]:checked').value;
    const sesionRealizada = estadoSeleccionado === "Realizada";

    duracionInput.disabled = !sesionRealizada;
    if (!sesionRealizada) {
      duracionInput.value = "0";
    }

    actividadesCheckboxes.forEach((checkbox) => {
      checkbox.disabled = !sesionRealizada;
      if (!sesionRealizada) {
        checkbox.checked = false;
      }
    });
  };

  estadoRadios.forEach((radio) => {
    radio.addEventListener("change", actualizarCamposSegunEstado);
  });

  actualizarCamposSegunEstado();

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    alert("Sesión registrada exitosamente.");
    window.location.href = `historial-sesiones.html?paciente=${paciente.ci}`;
  });
});
