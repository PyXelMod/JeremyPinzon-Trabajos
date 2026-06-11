// LECCIÓN 09 - RETO 1: Bienvenida personalizada
// imprimirReloj y imprimirFraseDelDia, llamadas 3 veces cada una

function imprimirReloj() {
  const ahora = new Date();
  const horas   = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  console.log(`🕐 Hora: ${horas}:${minutos}:${segundos}`);
}

function imprimirFraseDelDia() {
  const frases = [
    "¡El éxito es la suma de pequeños esfuerzos repetidos día tras día!",
    "Cada línea de código te acerca a tu meta.",
    "Los errores son el precio del aprendizaje. ¡Sigue adelante!",
    "Un programador en progreso es mejor que uno que no empieza.",
    "El mejor momento para aprender fue ayer; el segundo mejor es hoy."
  ];
  const idx = Math.floor(Math.random() * frases.length);
  console.log(`💬 ${frases[idx]}`);
}

// Llamar 3 veces cada función
for (let i = 0; i < 3; i++) {
  imprimirReloj();
  imprimirFraseDelDia();
  console.log("---");
}
