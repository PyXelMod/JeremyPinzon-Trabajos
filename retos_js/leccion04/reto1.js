// LECCIÓN 04 - RETO 1: Semáforo de calificaciones
// Clasificar nota con if/else if/else

const nota = 4.1;

if (nota < 0 || nota > 5) {
  console.log("ERROR DE VALIDACIÓN: la nota debe estar entre 0 y 5");
} else if (nota < 3.0) {
  console.log(`Nota ${nota}: DEFICIENTE`);
} else if (nota < 4.0) {
  console.log(`Nota ${nota}: ACEPTABLE`);
} else if (nota <= 4.5) {
  console.log(`Nota ${nota}: SOBRESALIENTE`);
} else {
  console.log(`Nota ${nota}: EXCELENTE`);
}
