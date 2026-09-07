document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const ci = params.get("paciente");
  const paciente = HISTORIAL_SESIONES[ci];

  const nombreEl = document.getElementById("paciente-nombre");
  const ciEl = document.getElementById("paciente-ci");
  const diagnosticoEl = document.getElementById("paciente-diagnostico");
  const tbody = document.getElementById("historial-tbody");
  const mensajeVacio = document.getElementById("historial-vacio");
  const contenido = document.getElementById("historial-contenido");
  const btnRegistrarSesion = document.getElementById("btn-registrar-sesion");

  const claseEstado = {
    Realizada: "estado-realizada",
    "No realizada": "estado-no-realizada",
    Reprogramada: "estado-reprogramada",
  };

  if (!paciente) {
    contenido.hidden = true;
    mensajeVacio.hidden = false;
    return;
  }

  nombreEl.textContent = paciente.nombre;
  ciEl.textContent = paciente.ci;
  diagnosticoEl.textContent = paciente.diagnostico;
  btnRegistrarSesion.href = `registro-sesion.html?paciente=${paciente.ci}`;

  paciente.sesiones.forEach((sesion) => {
    const fila = document.createElement("tr");

    const badgeClase = claseEstado[sesion.estado] || "";

    fila.innerHTML = `
      <td>${sesion.fecha}</td>
      <td><span class="estado-badge ${badgeClase}">${sesion.estado}</span></td>
      <td>${sesion.duracion}</td>
      <td>${sesion.actividades}</td>
      <td>${sesion.fisioterapeuta}</td>
    `;

    tbody.appendChild(fila);
  });
});
