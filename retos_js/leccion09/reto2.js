// LECCIÓN 09 - RETO 2: Tarea del sistema
// Tres funciones llamadas desde una cuarta: ejecutarLimpieza

function reiniciarContador() {
  console.log("🔄 Contador reiniciado a 0");
}

function notificarUsuario() {
  console.log("🔔 Notificación enviada");
}

function cerrarSesion() {
  console.log("🚪 Sesión cerrada");
}

function ejecutarLimpieza() {
  console.log("=== INICIANDO LIMPIEZA DEL SISTEMA ===");
  reiniciarContador();
  notificarUsuario();
  cerrarSesion();
  console.log("=== LIMPIEZA COMPLETADA ===");
}

ejecutarLimpieza();
