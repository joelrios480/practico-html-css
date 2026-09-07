document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registro-sesion-form");
  if (!form) {
    return;
  }

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

    const estado = form.querySelector('input[name="estado"]:checked').value;
    const lugar = form.querySelector('input[name="lugar"]:checked').value;
    const actividades = Array.from(actividadesCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)
      .join(", ") || "Ninguna";

    alert(
      `Sesión registrada.\nFisioterapeuta: ${form.fisioterapeuta.value}\nEstado: ${estado}\nLugar: ${lugar}\nDuración: ${duracionInput.value} min\nActividades: ${actividades}`
    );

    form.reset();
    actualizarCamposSegunEstado();
  });
});
