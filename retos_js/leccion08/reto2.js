// LECCIÓN 08 - RETO 2: Menú de calculadora con do/while
// Simula opciones: [1, 2, 3, 0] → sale cuando elige 0

const opciones = [1, 2, 3, 0];
let i = 0;
let opcion;

do {
  opcion = opciones[i];

  console.log("\n=== CALCULADORA ===");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("0. Salir");
  console.log(`Elegiste: ${opcion}`);

  switch (opcion) {
    case 1: console.log("➕ Ejecutando suma..."); break;
    case 2: console.log("➖ Ejecutando resta..."); break;
    case 3: console.log("✖ Ejecutando multiplicación..."); break;
    case 0: console.log("👋 ¡Hasta luego!"); break;
    default: console.log("⚠ Opción no válida.");
  }

  i++;
} while (opcion !== 0);
