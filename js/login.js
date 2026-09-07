document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const usuarioInput = document.getElementById("usuario");
  const contrasenaInput = document.getElementById("contrasena");
  const usuarioError = document.getElementById("usuario-error");
  const contrasenaError = document.getElementById("contrasena-error");



  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    usuarioError.textContent = "";
    contrasenaError.textContent = "";

    const usuario = usuarioInput.value.trim();
    const contrasena = contrasenaInput.value.trim();
    let esValido = true;

    if (!usuario) {
      usuarioError.textContent = "El usuario es obligatorio.";
      esValido = false;
    }

    if (!contrasena) {
      contrasenaError.textContent = "La contraseña es obligatoria.";
      esValido = false;
    }

    if (!esValido) {
      return;
    }

    const usuarioEncontrado = USUARIOS.find(
      (registro) => registro.usuario === usuario && registro.contrasena === contrasena
    );

    if (!usuarioEncontrado) {
      alert("Usuario o contraseña incorrectos.");
      return;
    }

    alert(`Login exitoso. ¡Bienvenido, ${usuarioEncontrado.nombre}!`);
    window.location.href = "pages/dashboard.html";
  });
});
