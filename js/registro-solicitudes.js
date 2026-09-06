document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registro-form");

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    alert("Solicitud registrada exitosamente.");
    window.location.href = "lista-solicitudes.html";
  });
});
