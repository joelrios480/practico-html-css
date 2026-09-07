# Fisioterapia - Módulo 1 (HTML + CSS)

Practica Nro 1, Maestria Software Avanzado Modulo 1: sistema de gestión de solicitudes y sesiones de una clínica de fisioterapia, hecho en HTML y CSS puro (con JS para interacciones simples). Los datos son hardcodeados, no hay backend.

## Cómo levantar la página con Live Server

1. Abre la carpeta del proyecto en VS Code.
2. Instala la extensión **Live Server** (autor: Ritwick Dey) desde el marketplace de VS Code, si no la tienes.
3. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"** (o presiona el botón "Go Live" en la barra inferior de VS Code).
4. Se abrirá el navegador en una URL como `http://127.0.0.1:5500/index.html` con el login.

## Credenciales de acceso

- **Usuario:** `admin`
- **Contraseña:** `123456`

## Estructura del proyecto

- `index.html` — página de login.
- `pages/` — páginas internas (dashboard, lista/registro de solicitudes, sesiones agendadas, historial y registro de sesión).
- `css/common/` — estilos compartidos entre varias páginas (variables, base, layout, formularios, tablas).
- `css/*.css` — estilos exclusivos de cada página.
- `js/` — lógica de cada página y datos hardcodeados (usuarios, historial de sesiones).
